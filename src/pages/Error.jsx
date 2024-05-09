import { useNavigate } from 'react-router-dom';


export default function Error() {

  const navigate = useNavigate();

  const layout = {
    padding: `40px 80px`
  }

  return (
    <div style={layout}>
        <div>
            <h2 className="">
            ERROR 404 || Page Under construction
            </h2>
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