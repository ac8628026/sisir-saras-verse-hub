
export interface ExhibitionInfo {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  startDate: Date;
  endDate: Date;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    backgroundGradient: string;
  };
}

// This would typically fetch from a backend API
export const getAvailableExhibitions = async (): Promise<ExhibitionInfo[]> => {
  // For now, return static data. In the future, this would make an API call
  return [
    {
      id: 'ormas',
      name: 'ORMAS Exhibition',
      description: 'Celebrating Odisha\'s Heritage',
      isActive: true,
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      theme: {
        primaryColor: '#f97316',
        secondaryColor: '#dc2626', 
        backgroundGradient: 'from-orange-50 to-orange-100'
      }
    }
  ];
};

export const getExhibitionById = async (id: string): Promise<ExhibitionInfo | null> => {
  const exhibitions = await getAvailableExhibitions();
  return exhibitions.find(ex => ex.id === id) || null;
};
