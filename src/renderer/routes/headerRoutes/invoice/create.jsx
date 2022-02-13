import HeaderComponent from 'renderer/components/header';

const CreateInvoice = () => {
  return (
    <HeaderComponent
      title="Create Customer"
      headerConfig={{
        discard: {
          title: 'Discard',
          key: 'discard',
          customProps: {
            danger: true,
          },
        },
        create: {
          title: 'Create',
          key: 'create',
          customProps: {
            type: 'primary',
          },
        },
      }}
    />
  );
};

export default CreateInvoice;
