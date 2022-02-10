import HeaderComponent from 'renderer/components/header';
import { useNavigate } from 'react-router-dom';

const ViewCustomer = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/customer/create`);
  };
  return (
    <HeaderComponent
      title="View Customers"
      headerConfig={{
        create: {
          title: 'Create New Profile',
          key: 'create',
          onClick: () => handleOnClick(),
          customProps: {
            type: 'primary',
          },
        },
      }}
    />
  );
};

export default ViewCustomer;
