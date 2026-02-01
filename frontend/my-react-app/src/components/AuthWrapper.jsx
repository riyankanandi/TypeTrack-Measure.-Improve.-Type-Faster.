function AuthWrapper({ title, children }) {
 return (
    <div className="auth-page">
      <div className="auth-box">
        {title && <h1 className="title">{title}</h1>}
        {children}
      </div>
    </div>
  );
}
export default AuthWrapper;
