import { Code, Paintbrush2, Gem, BookOpen, Cpu } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <Code size={72} strokeWidth={0.8} />,
    title: "FiveM Játékszerver Fejlesztés",
    desription:
      "Több mint 3 éves tapasztalattal FiveM szerver fejlesztést vállalok.",
  },
  {
    icon: <Code size={72} strokeWidth={0.8} />,
    title: "Script Írás",
    desription:
      "Tanácsadás a fejlesztéssel vagy számítógépekkel kapcsolatosan a tapasztalatom alapján",
  },
];
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h1 className="h1 mb-12 xl:mb-24 text-center mx-auto">
          Szolgáltatások
        </h1>

        {/* grid item */}
        <div className="grid xl:grid-cols-2 items-center justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[350px] flex flex-col pt-16 pb-10 justify-center items-center relative "
                key={index}
              >
                <CardHeader className="text-primary absolute top-[-25px] pb-10">
                  <div className="w-[140px] h-[80px] bg-transpaent dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="pt-10 text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.desription}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
