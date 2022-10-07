import React from "react";
import NextLink from "next/link";
import {
     AspectRatio,
     Box,
     GridItem,
     Heading,
     Image,
     Link,
     Flex,
     Skeleton,
     SkeletonCircle,
     SkeletonText,
     Stack,
     Text,
} from "@chakra-ui/react";

import { IoBedOutline } from "react-icons/io5";
import { TbBath } from "react-icons/tb";
import { BiDoorOpen } from "react-icons/bi";
import { BiArea } from "react-icons/bi";

const ProductCard = () => {
     return (
          <NextLink href="/product" passHref justifyContent="center">
               <Link href="/">
                    <Box
                         pos="relative"
                         bgColor={"white"}
                         borderRadius="5px"
                         overflow={"hidden"}
                         transition="0.3s ease"
                         flexShrink="1"
                         _hover={{
                              transform: "scale(1.3)",
                              boxShadow: "md",
                              zIndex: "10",
                         }}
                    >
                         <Box>
                              <AspectRatio ratio={5 / 4}>
                                   <Image
                                        src="./images/HeaderSlider/1.jpg"
                                        width="70%"
                                   />
                              </AspectRatio>
                              <Stack
                                   direction="row"
                                   display={"flex"}
                                   left="2%"
                                   justifyContent={"space-between"}
                                   pos="absolute"
                                   top="2%"
                                   width="90%"
                              >
                                   <Text
                                        bgColor={"white"}
                                        px={2}
                                        py={1}
                                        borderRadius="5px"
                                   >
                                        Logo
                                   </Text>
                                   <Text
                                        bgColor={"white"}
                                        px={2}
                                        py={1}
                                        borderRadius="5px"
                                   >
                                        Type
                                   </Text>
                              </Stack>
                         </Box>
                         <Stack p={3}>
                              <Heading
                                   variant={"smallHeading"}
                                   flexWrap="nowrap"
                              >
                                   Рокмон бюлдинг оффис
                              </Heading>
                              <Text>Баруун 4-н зам</Text>
                              <Stack
                                   direction={"row"}
                                   gap={2}
                                   justifyContent="space-around"
                              >
                                   <Flex alignItems={"center"} gap={1}>
                                        <BiDoorOpen className="info__icon" />
                                        <Text variant={"smallHeading"}>5</Text>
                                   </Flex>
                                   <Flex alignItems={"center"} gap={1}>
                                        <IoBedOutline className="info__icon" />
                                        <Text variant={"smallHeading"}>3</Text>
                                   </Flex>
                                   <Flex alignItems={"center"} gap={1}>
                                        <TbBath className="info__icon" />
                                        <Text variant={"smallHeading"}>2</Text>
                                   </Flex>
                                   <Flex alignItems={"center"} gap={1}>
                                        <BiArea className="info__icon" />
                                        <Text variant={"smallHeading"}>
                                             5м.кв
                                        </Text>
                                   </Flex>
                              </Stack>
                              <Heading variant={"smallHeading"}>
                                   15,000,000.00
                              </Heading>
                         </Stack>
                    </Box>
               </Link>
          </NextLink>
     );
};

export default ProductCard;