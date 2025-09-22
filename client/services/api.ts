const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://chatriox.com/api';

class ApiService {
  private token: string | null = null;

  constructor() {
    // Support both token keys for compatibility
    this.token = localStorage.getItem('authToken') || localStorage.getItem('token');
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      // Check content type first
      const contentType = response.headers.get('content-type');
      if (!contentType?.includes('application/json')) {
        throw new Error('Server returned invalid response format');
      }

      const data = await response.json();

      if (!response.ok) {
        // Handle specific HTTP status codes
        if (response.status === 401) {
          this.logout(); // Clear invalid token
          if (data.code === 'TOKEN_EXPIRED') {
            throw new Error('Your session has expired. Please log in again.');
          }
          throw new Error('Authentication failed. Please log in again.');
        }
        
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      // Handle the response structure
      if (data.success === false) {
        throw new Error(data.message || 'Operation failed');
      }

      return data;
      
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth methods
  async login(email: string, password: string) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    const token = response.data?.token || response.token;
    if (token) {
      this.token = token;
      localStorage.setItem('authToken', token);
      localStorage.setItem('token', token); // Keep both for compatibility
    }
    
    return response.data || response;
  }

  async register(name: string, email: string, password: string) {
    const response = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    
    const token = response.data?.token || response.token;
    if (token) {
      this.token = token;
      localStorage.setItem('authToken', token);
      localStorage.setItem('token', token); // Keep both for compatibility
    }
    
    return response.data || response;
  }

  async getCurrentUser() {
    const response = await this.request('/auth/me');
    return response.data?.user || response.user || response;
  }

  async getProfile() {
    return this.getCurrentUser();
  }

  isAuthenticated(): boolean {
    if (!this.token) return false;
    
    try {
      const payload = JSON.parse(atob(this.token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  logout() {
    this.token = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('token');
  }

  // Settings methods
  async getSettings() {
    const response = await this.request('/settings');
    return response.data || response;
  }

  async updateProfile(data: any) {
    const response = await this.request('/settings/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return response.data || response;
  }

  async updatePreferences(data: any) {
    const response = await this.request('/settings/preferences', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return response.data || response;
  }

  async updateNotifications(data: any) {
    const response = await this.request('/settings/notifications', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return response.data || response;
  }

  // Dashboard methods
  async getStats(timeRange = '7d') {
    const response = await this.request(`/dashboard/stats?timeRange=${timeRange}`);
    return response.data || response;
  }

  async getAnalytics(timeRange = '7d') {
    const response = await this.request(`/dashboard/analytics?timeRange=${timeRange}`);
    return response.data || response;
  }

  async getCampaigns(limit = 5) {
    const response = await this.request(`/dashboard/campaigns?limit=${limit}`);
    return response.data || response;
  }

  // Template methods
  async getTemplates(params?: {
    category?: string;
    search?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: string;
  }) {
    const queryString = params ? '?' + new URLSearchParams(
      Object.entries(params).filter(([_, value]) => value !== undefined && value !== '')
        .map(([key, value]) => [key, String(value)])
    ).toString() : '';
    
    const response = await this.request(`/templates${queryString}`);
    
    return {
      templates: response.data?.templates || response.templates || [],
      pagination: response.data?.pagination || response.pagination || {}
    };
  }

  async getMyTemplates(page = 1, limit = 20) {
    const response = await this.request(`/templates/my-templates?page=${page}&limit=${limit}`);
    return response.data || response;
  }

  async getTemplate(id: string) {
    const response = await this.request(`/templates/${id}`);
    return response.data || response;
  }

  async createTemplate(templateData: any) {
    const response = await this.request('/templates', {
      method: 'POST',
      body: JSON.stringify(templateData),
    });
    return response.data || response;
  }

  async updateTemplate(id: string, templateData: any) {
    const response = await this.request(`/templates/${id}`, {
      method: 'PUT',
      body: JSON.stringify(templateData),
    });
    return response.data || response;
  }

  async deleteTemplate(id: string) {
    const response = await this.request(`/templates/${id}`, {
      method: 'DELETE',
    });
    return response.data || response;
  }

  async cloneTemplate(id: string) {
    const response = await this.request(`/templates/${id}/clone`, {
      method: 'POST',
    });
    return response.data || response;
  }

  async toggleFavorite(id: string) {
    const response = await this.request(`/templates/${id}/favorite`, {
      method: 'POST',
    });
    return response.data || response;
  }

  async rateTemplate(id: string, rating: number) {
    const response = await this.request(`/templates/${id}/rate`, {
      method: 'POST',
      body: JSON.stringify({ rating }),
    });
    return response.data || response;
  }

  async duplicateTemplate(id: string) {
    const response = await this.request(`/templates/${id}/clone`, {  
      method: 'POST',
    });
    return response.data || response;
  }

  async getTemplateStats() {
    const response = await this.request('/templates/stats/dashboard');
    return response.data || response;
  }

  // AI methods - This is the missing method that was causing your error
  async generateTemplate(prompt: string, category?: string, templateName?: string) {
    const response = await this.request('/ai/generate-template', {
      method: 'POST',
      body: JSON.stringify({ prompt, category, templateName }),
    });
    return response;
  }

  async getAISuggestions(category: string) {
    const response = await this.request(`/ai/suggestions/${category}`);
    return response.data || response;
  }

  async enhanceTemplate(id: string, enhancementType: string, prompt?: string) {
    const response = await this.request(`/ai/enhance-template/${id}`, {
      method: 'POST',
      body: JSON.stringify({ enhancementType, prompt }),
    });
    return response.data || response;
  }

  // Admin methods
  async getAdminDashboard() {
    const response = await this.request('/admin/dashboard');
    return response.data || response;
  }

  async getAdminUsers(params?: { page?: number; limit?: number; search?: string }) {
    const queryString = params ? '?' + new URLSearchParams(params as any).toString() : '';
    const response = await this.request(`/admin/users${queryString}`);
    return response.data || response;
  }

  async getAdminTemplates(params?: {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
    isPublic?: boolean;
  }) {
    const queryString = params ? '?' + new URLSearchParams(params as any).toString() : '';
    const response = await this.request(`/admin/templates${queryString}`);
    return response.data || response;
  }

  async createAdminTemplate(templateData: any) {
    const response = await this.request('/admin/templates', {
      method: 'POST',
      body: JSON.stringify(templateData),
    });
    return response.data || response;
  }

  async updateAdminTemplate(id: string, data: any) {
    const response = await this.request(`/admin/templates/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return response.data || response;
  }

  async deleteAdminTemplate(id: string) {
    const response = await this.request(`/admin/templates/${id}`, {
      method: 'DELETE',
    });
    return response.data || response;
  }

  async updateUserRole(id: string, role: string) {
    const response = await this.request(`/admin/users/${id}/role`, {
      method: 'PUT',
      body: JSON.stringify({ role }),
    });
    return response.data || response;
  }

  async deactivateUser(id: string) {
    const response = await this.request(`/admin/users/${id}/deactivate`, {
      method: 'PUT',
    });
    return response.data || response;
  }
}

// Create the main instance
export const apiService = new ApiService();

// For backwards compatibility, also export the old structure
export const authApi = {
  login: (email: string, password: string) => apiService.login(email, password),
  register: (name: string, email: string, password: string) => apiService.register(name, email, password),
  getProfile: () => apiService.getProfile()
};

export const settingsApi = {
  getSettings: () => apiService.getSettings(),
  updateProfile: (data: any) => apiService.updateProfile(data),
  updatePreferences: (data: any) => apiService.updatePreferences(data),
  updateNotifications: (data: any) => apiService.updateNotifications(data)
};

export const dashboardApi = {
  getStats: (timeRange?: string) => apiService.getStats(timeRange),
  getAnalytics: (timeRange?: string) => apiService.getAnalytics(timeRange),
  getCampaigns: (limit?: number) => apiService.getCampaigns(limit)
};