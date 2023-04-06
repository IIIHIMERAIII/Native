import React, { useState } from 'react';
import { TabBar } from '../../components/tabBar/tabBar';
import { CreatePostTabBar } from '../../components/createPostBar/createPostBar';


export const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Home');
  console.log(activeTab);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      {activeTab === 'Home' && (
        <TabBar onTabChange={handleTabChange} />
      )}
      {activeTab === 'Create' && (
        <CreatePostTabBar onTabChange={handleTabChange} />
      )}
    </>
  );
};

 