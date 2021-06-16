import { Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken'

const PrivateRoutes: any = ({ component: Component, path: Path, ...rest}: any) => {

  const isLogin: string | null = localStorage.getItem('@tokenG5T2Afya');
  const isSectionActive: any = () => {
    if ( isLogin === null ){
      return false
    } else {
      // const tokenPayLoad: any = isLogin?.split('.')[1]
      const decodedToken : any = jwt.decode(isLogin)
      const expSeconds = decodedToken.exp;
      const timeNow = Date.now() / 1000;
  
      return timeNow > expSeconds ? false : true

    }
  } 

  return (
    <Route {...rest} render={ props => (
      isSectionActive() ? <Component {...props}/> : <Redirect to="/login"/>
      )}
    />
  );
}

export default PrivateRoutes;