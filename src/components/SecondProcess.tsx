import line from "../assets/Line 38.svg";
import pipeLine from "../assets/pipeline.png";
import deploy from "../assets/deploy.png";
import tools from "../assets/tools.png";
import scale from "../assets/scale.png";

export default function SecondProcess() {
  const data = [
    {
      id: 1,
      imgSrc: pipeLine,
      title: "Configurable Build and Deploy pipelines",
      subTitle:
        "Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.",
    },
    {
      id: 2,
      imgSrc: deploy,
      title: "Push to Deploy",
      subTitle:
        "Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.",
    },
    {
      id: 3,
      imgSrc: tools,
      title: "Multiple runtimes",
      subTitle:
        "Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.",
    },
    {
      id: 4,
      imgSrc: scale,
      title: "Scale infinitely",
      subTitle:
        "Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.",
    },
  ];
  return (
    <div className="lg:mx-28">
      <div className="flex flex-col items-center justify-center my-16">
        <p className="text-lg font-bold">02</p>
        <img src={line} alt="line" />
        <p className="font-bold mt-8 text-2xl text-center">{"Deploy applications, fast!"}</p>
        <p className="text-center px-4 mt-4 text-gray-600">
          {
            " Set up automated deployments of your application in 5 minutes and get back to building stuff that matters."
          }
        </p>
      </div>
      <div className="flex flex-col items-center justify-center ">
        {data.map((item,index) => (
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
  );
}
