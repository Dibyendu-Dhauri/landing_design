import cost from '../assets/cost.png'
import preview from '../assets/preview.png'
import observe from '../assets/observability.png'
import line from "../assets/Line 38.svg";

export default function ThirdProcess() {
    const ThirdProcessdata = [
        {
          id: 1,
          imgSrc: cost,
          title: "Customizable cost dashboards and reports",
          subTitle:
            "Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.",
        },
        {
          id: 2,
          imgSrc: preview,
          title: "Preview infra costs",
          subTitle:
            "See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.",
        },
        {
          id: 3,
          imgSrc: observe,
          title: "Observability from day one",
          subTitle:
            "Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.",
        },
      ];
  return (
    <div className="lg:mx-28">
      <div className="flex flex-col items-center justify-center my-16">
        <p className="text-lg font-bold">{"03"}</p>
        <img src={line} alt="line" />
        <p className="font-bold mt-8 text-2xl text-center">{"Visibility into costs and metrics"}</p>
        <p className="text-center px-4 mt-4 text-gray-600">
          {
            " Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory."
          }
        </p>
      </div>
      <div className="flex flex-col items-center justify-center ">
        {ThirdProcessdata.map((item,index) => (
          <div key={item.id} className={`my-12 lg:flex ${index % 2 === 0 ? "": "flex-row-reverse"} `}>
            <div className="lg:w-1/2 flex items-center justify-center px-4 mb-8">
              <img src={item.imgSrc} alt="cloud" />
            </div>
            <div className="flex flex-col lg:w-1/2  ">
              <p className="font-bold mt-4 text-center text-xl lg:text-start">
                {item.title}
              </p>
              <p className="px-4 mt-4 text-gray-600 text-center lg:text-start lg:pl-0">
                {item.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
