import Dashboard from "../components/Dashboard";
import WithXero from "../components/WithXero";
import withImg from '../assets/with.png'
import withoutImg from '../assets/without.png'
import Features from "../components/Features";
import Modernize from "../components/Modernize";

export default function FeaturesModel() {

  return (
    <>
    <Dashboard/>
    <div className="lg:flex items-center justify-around">

    <WithXero withImg = {withoutImg} withXero={"without XeroCodee"}/>
    <WithXero withImg = {withImg} withXero={"with XeroCodee"}/>
    </div>
    <Features/>
    <Modernize/>
    </>
  )
}
