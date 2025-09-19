import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TemplateGallery } from './TemplateGallery';
import { EmailBuilder } from './EmailBuilder';
import { EmailPreview } from './EmailPreview';
import { EmailTemplate } from '../types/EmailTypes';

type ViewMode = 'gallery' | 'builder' | 'preview';

export const TemplateManager: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('gallery');
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null);
  const navigate = useNavigate();

  const handleCreateNew = () => {
    setSelectedTemplate(null);
    setCurrentView('builder');
  };

  const handleEditTemplate = (template: EmailTemplate) => {
    setSelectedTemplate(template);
    setCurrentView('builder');
  };

  const handlePreviewTemplate = (template: EmailTemplate) => {
    setSelectedTemplate(template);
    setCurrentView('preview');
  };

  const handleBackToGallery = () => {
    setCurrentView('gallery');
    setSelectedTemplate(null);
  };

  const handleSaveTemplate = (template: EmailTemplate) => {
    // Handle save logic here
    console.log('Saving template:', template);
    setCurrentView('gallery');
  };

  // Render based on current view
  switch (currentView) {
    case 'builder':
      return (
        <EmailBuilder
          template={selectedTemplate}
          onSave={handleSaveTemplate}
          onBack={handleBackToGallery}
        />
      );

    case 'preview':
      return selectedTemplate ? (
        <EmailPreview
            components={selectedTemplate.components}  // ✅ Pass the components array
          template={selectedTemplate}
          onBack={handleBackToGallery}
          onEdit={() => handleEditTemplate(selectedTemplate)}
        />
      ) : (
        <div>No template selected</div>
      );

    case 'gallery':
    default:
      return (
        <TemplateGallery
          onCreateNew={handleCreateNew}
          onEditTemplate={handleEditTemplate}
          onPreviewTemplate={handlePreviewTemplate}
        />
      );
  }
};