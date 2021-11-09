import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function MyLoader() {
  return (
    <div className="myLoader">
      <Loader type="ThreeDots" color="#f3213d" height={80} width={80} />
    </div>
  );
}
