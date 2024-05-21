import { useNavigate } from 'react-router-dom';


export default function Error() {

  const navigate = useNavigate();

  const layout = {
    padding: `40px 80px`
  }

  const extractTitle = (path) => {
    // Split the path by '/' and get the last part
    const parts = path.split('/');
    const lastPart = parts[parts.length - 1];
    
    // Replace '-' with ' ' and capitalize each word
    const title = lastPart.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    
    return title;
}

  return (
    <div style={layout}>
        <div>
            <h2 className="">
            ERROR 404 || Page Under construction
            </h2>
        </div>
        <div>
          <h1>
          {extractTitle(window.location.pathname)}
          </h1>
        </div>
        <div className="">
            <div className="btn-wrap">
                <button className="btn" onClick={() => navigate(-1)}>
                  Back
                </button>
            </div>
        </div>
    </div>
  )
}