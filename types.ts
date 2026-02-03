
import React from 'react';

export interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}