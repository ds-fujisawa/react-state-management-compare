const Loading = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      zIndex: 100,
      fontSize: '32px',
    }}
  >
    loading…
  </div>
);

export default Loading;
