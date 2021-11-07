import Directory from  "../../shared/components/Directory";

import "./homepage.scss";

function HomePage({history}: any) {
  console.log(history);
  
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}

export default HomePage;
