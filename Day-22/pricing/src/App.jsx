import styled from "styled-components";
import Pricing from "./components/Pricing";

function App() {
  return (
    
      <MainContainer>
        <div className="pricing-component">
          <Pricing
            data={[
              { text: "Single User", value: true },
              { text: "50GB Storage", value: true },
              { text: "Unlimited Public Projects", value: true },
              { text: "Community Access", value: true },
              { text: "Unlimited Private Project", value: false },
              { text: "Dedicated Phone Support", value: false },
              { text: "Free Subdomain", value: false },
              { text: "Monthly Status Reports", value: false },
            ]}
            price={0.1}
            duration="m"
            shadow="#96e6a1"
            currency="$"
            buttonContent="button"
            headerText="free"
          />
        </div>
        <div className="pricing-component">
          <Pricing
            data={[
              { text: "5 User", value: true },
              { text: "50GB Storage", value: true },
              { text: "Unlimited Public Projects", value: true },
              { text: "Community Access", value: true },
              { text: "Unlimited Private Project", value: true },
              { text: "Dedicated Phone Support", value: true },
              { text: "Free Subdomain", value: true },
              { text: "Monthly Status Reports", value: false },
            ]}
            price={9}
            duration="m"
            shadow="#4a08ff"
            currency="$"
            buttonContent="button"
            headerText="PLus"
          />
        </div>
        <div className="pricing-component">
          <Pricing
            data={[
              { text: "Single User", value: true },
              { text: "50GB Storage", value: true },
              { text: "Unlimited Public Projects", value: true },
              { text: "Community Access", value: true },
              { text: "Unlimited Private Project", value: true },
              { text: "Dedicated Phone Support", value: true },
              { text: "Free Subdomain", value: true },
              { text: "Monthly Status Reports", value: true },
            ]}
            price={49}
            duration="m"
            shadow="#ffb199"
            currency="$"
            buttonContent="button"
            headerText="pro"
          />
        </div>
        
      </MainContainer>
    
  );
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f1ff;

  @media screen and (max-width: 970px) {
    height: 100%;
    flex-direction: column;
    .pricing-component {
      margin: 2rem 0;
    }
  }
`;

export default App;
