import React from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

function ServicesCard({ services }) {
  return (
    <div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {services.map((item, index) => (
          <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                alt={item.title}
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ServicesCard