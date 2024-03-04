// MenuDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MenuDetailPage = () => {
  const { menuItem } = useParams();

  // Dynamically import the corresponding component based on the menuItem
  const MenuItemPage = React.lazy(() => import(`./MenuPages/${menuItem}Page`));

  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <MenuItemPage />
      </React.Suspense>
    </div>
  );
};

export default MenuDetailPage;
