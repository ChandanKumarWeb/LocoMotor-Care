import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

function ServicesCard({ services }) {
  return (
    <div className="container mx-auto py-8">
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <Card
  isPressable
  shadow="md"
  onPress={() => console.log("item pressed")}
  className="group transition-shadow duration-300 ease-in-out rounded-2xl flex flex-col h-full
    bg-white dark:bg-neutral-900 border border-gray-500 dark:border-neutral-800 hover:shadow-2xl"
>
              <CardBody className="overflow-hidden p-0">
                <div className="overflow-hidden rounded-t-2xl">
                  <Image
                    alt={item.title}
                    className="w-full h-36 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-t-2xl"
                    radius="none"
                    shadow="none"
                    src={item.img}
                    width="100%"
                  />
                </div>
              </CardBody>
              <CardFooter className="flex flex-col items-start gap-1 p-4 bg-white dark:bg-neutral-900 rounded-b-2xl">
                <b className="text-base md:text-lg text-gray-900 dark:text-gray-100 mb-1">
                  {item.title}
                </b>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {item.defination}
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ServicesCard;
