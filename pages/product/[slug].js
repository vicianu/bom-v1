import {
  AspectRatio,
  Box,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// Import Swiper React components
// Import Swiper styles
// import "swiper/css";

import { FaHeart } from "react-icons/fa";
import FilterLayout from "../../components/filter";
import MainContainer from "../../layout/mainContainer";
import ProductCard from "../../components/home/productCard";
import ECalculator from "../calculator";

import ScrollTop from "@/lib/ScrollTop";

// Icons

// Image Swiper Gallery
import moment from "moment/moment";
import { useRouter } from "next/router";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/images/HeaderSlider/1.jpg",
    thumbnail: "/images/HeaderSlider/1.jpg",
  },
  {
    original: "/images/404.png",
    thumbnail: "/images/404.png",
  },
  {
    original: "/images/HeaderSlider/1.jpg",
    thumbnail: "/images/HeaderSlider/1.jpg",
  },
  {
    original: "/images/HeaderSlider/1.jpg",
    thumbnail: "/images/HeaderSlider/1.jpg",
  },

  {
    original: "/images/HeaderSlider/1.jpg",
    thumbnail: "/images/HeaderSlider/1.jpg",
  },
  {
    original: "/images/HeaderSlider/1.jpg",
    thumbnail: "/images/HeaderSlider/1.jpg",
  },
  {
    original: "/images/HeaderSlider/1.jpg",
    thumbnail: "/images/HeaderSlider/1.jpg",
  },
  {
    original: "images/HeaderSlider/1.jpg",
    thumbnail: "images/HeaderSlider/1.jpg",
  },

  {
    original: "images/HeaderSlider/1.jpg",
    thumbnail: "images/HeaderSlider/1.jpg",
  },
  {
    original: "images/HeaderSlider/1.jpg",
    thumbnail: "images/HeaderSlider/1.jpg",
  },
];

const ProductInfo = ({ title, value, children, key }) => {
  return (
    <GridItem className="product__info" key={key}>
      {children ? (
        children
      ) : (
        <Stack
          direction={"row"}
          p={2}
          borderColor="bgGrey"
          borderWidth={2}
          borderRadius={5}
        >
          <Text textTransform={"capitalize"}>{title}: </Text>
          <Text textTransform={"capitalize"} fontWeight={"bold"}>
            {value}
          </Text>
        </Stack>
      )}
    </GridItem>
  );
};
const product = {
  title: "?????????????? ???????????? 3 ???????? ???????? ??????????.",
  date: "2022.09.21 15:53",
  description: "?????????????? 2 ?????????????? 3-?? ???????? ?????????? ???????????????????? ???????? ???????? ??????????.",
  info: [
    { ????????: "9599-2333" },
    { "": "" },
    { ??????: "350.0 ??????" },
    { ????????????: "70 ??2" },
    { "???????? ?????????????? ??????": "5.0 ??????" },
    { ????????????: "??????-??????" },
    { ??????????: "4-?? ??????????" },
    { ??????????????: "??????????" },
    { ????????????: "?????????????? 2" },
    { "???????????????????? ?????????? ????": "2021" },
    { "???????????????? ????????????": "25" },
    { "?????????? ????????????": "18" },
    { ????????: "3" },
    { "???????????????? ????????": "1" },
    { "Mac/???????????????? ????????": "??????????????" },
    { ????????: "??????????" },
    { "???????????? ??????": "4" },
    { ????????????: "????????????" },
    { ??????: "????????????" },
    { ??????????: "????????????" },
    { "???????????? ??????": "1" },
    { ????????????: "??????????????" },
    { "?????????????????? ????????????": "??????????" },
  ],
  socials: {
    facebook: "https://www.facebook.com/sokobishu",
  },
};
const Product = () => {
  const toast = useToast();
  const router = useRouter();
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      await fetch(`https://bom-location.herokuapp.com/ad/${router.query.slug}`)
        .then((r) => r.json())
        .then((d) => {
          setData(d), console.log(d);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (router.query.slug) {
      getData();
    }
  }, [router.query]);
  return (
    <Box my={5} as="section" id="main__product">
      <ScrollTop />
      <MainContainer>
        <Stack direction={"row"} py={2} gap={3}>
          {/* //TODO Filter Box */}
          <FilterLayout />

          {/* //TODO Filter box end */}

          {/* //TODO Main product */}
          <Box maxWidth={"75%"} flex="0 0 75%" borderRadius="5px">
            <Box bgColor={"white"} p={10} rounded={10} boxShadow="base">
              {/*Product */}
              {data.title && (
                <Heading variant={"mediumHeading"} mb={5}>
                  {data.title}
                </Heading>
              )}
              <Grid
                className="product__content-wrapper"
                templateColumns="repeat(2,1fr)"
                gap={10}
              >
                {/*  //TODO LEFT SIDE IMAGES AND DESC */}

                <GridItem className="product__image-wrapper">
                  <Stack
                    direction={"row"}
                    justifyContent="space-between"
                    alignItems={"center"}
                    mb={2}
                  >
                    <Stack direction={"row"}>
                      <Text>
                        ?????????? ??????????:
                        {moment(data.createdAt).format("lll")}
                      </Text>
                      <Text>?????????? ????????????: 1</Text>
                    </Stack>
                    <Text>
                      <IconButton
                        aria-label="Search database"
                        icon={<FaHeart />}
                        _hover={{
                          color: "red",
                        }}
                        size="lg"
                        onClick={() =>
                          toast({
                            title: "?????? ????????????????????????.",
                            status: "success",
                            duration: 9000,
                            isClosable: true,
                          })
                        }
                      />
                      {/* ??????????????: lorem */}
                    </Text>
                  </Stack>
                  <Box
                    boxShadow={"xs"}
                    borderWidth="2px"
                    rounded={4}
                    mb="120px"
                    className="product__image"
                  >
                    <AspectRatio ratio={1}>
                      <ImageGallery items={images} />
                    </AspectRatio>
                  </Box>
                  <Text mt={5}>{data.description}</Text>
                </GridItem>

                {/*  //TODO  ENDING LEFT SIDE IMAGES AND DESC */}

                {/*  //TODO  STARTS RIGHT SIDE INFOS */}

                <GridItem>
                  <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                    {
                      data &&
                        data.positions &&
                        data.positions.location_id &&
                        data.positions.district_id && (
                          <>
                            <ProductInfo
                              key={data.positions.district_id._id}
                              title={"????????????"}
                              value={data.positions.district_id.name}
                            />{" "}
                            <ProductInfo
                              key={data.positions.location_id._id}
                              title={"????????????????"}
                              value={data.positions.location_id.name}
                            />
                          </>
                        )

                      //   return (
                      //        <ProductInfo
                      //             key={i}
                      //        >
                      //             <HStack
                      //                  p={2}
                      //                  justifyContent="center"
                      //                  gap={1}
                      //                  borderColor="bgGrey"
                      //                  borderWidth={
                      //                       2
                      //                  }
                      //                  borderRadius={
                      //                       5
                      //                  }
                      //             >
                      //                  {product
                      //                       .socials
                      //                       .facebook && (
                      //                       <Link
                      //                            target={
                      //                                 "_blank"
                      //                            }
                      //                            href={
                      //                                 product
                      //                                      .socials
                      //                                      .facebook
                      //                            }
                      //                       >
                      //                            <BsFacebook />
                      //                       </Link>
                      //                  )}
                      //                  {product
                      //                       .socials
                      //                       .instagram && (
                      //                       <Link>
                      //                            <BsInstagram />
                      //                       </Link>
                      //                  )}
                      //             </HStack>
                      //        </ProductInfo>
                      //   );
                    }
                    {data &&
                      data.filters.map((p, i) => {
                        if (p.id != null) {
                          return (
                            <ProductInfo
                              key={i}
                              title={p.id.name}
                              value={p.value}
                            />
                          );
                        }

                        //   return (
                        //        <ProductInfo
                        //             key={i}
                        //        >
                        //             <HStack
                        //                  p={2}
                        //                  justifyContent="center"
                        //                  gap={1}
                        //                  borderColor="bgGrey"
                        //                  borderWidth={
                        //                       2
                        //                  }
                        //                  borderRadius={
                        //                       5
                        //                  }
                        //             >
                        //                  {product
                        //                       .socials
                        //                       .facebook && (
                        //                       <Link
                        //                            target={
                        //                                 "_blank"
                        //                            }
                        //                            href={
                        //                                 product
                        //                                      .socials
                        //                                      .facebook
                        //                            }
                        //                       >
                        //                            <BsFacebook />
                        //                       </Link>
                        //                  )}
                        //                  {product
                        //                       .socials
                        //                       .instagram && (
                        //                       <Link>
                        //                            <BsInstagram />
                        //                       </Link>
                        //                  )}
                        //             </HStack>
                        //        </ProductInfo>
                        //   );
                      })}
                  </Grid>
                </GridItem>
                {/*  //TODO  ENDING RIGHT SIDE INFOS */}
              </Grid>
            </Box>

            <Box>
              {/* <Estimator /> */}
              <ECalculator />
            </Box>
          </Box>
        </Stack>
      </MainContainer>
      <MainContainer py={"50px"}>
        <Stack
          direction={"row"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Heading variant="smallHeader" mb={5}>
            ?????????? ???????????? ????????????
          </Heading>
          <Box>
            <Select
              placeholder="????????????????"
              variant="outline"
              borderWidth="2px"
              color={"mainBlossom"}
            >
              <option value="option1">??????????????????</option>
            </Select>
          </Box>
        </Stack>

        <Grid
          direction={"row"}
          templateColumns="repeat(auto-fill, minmax(230px, 1fr))"
          rowGap={5}
          gap="5"
          width="100%"
          justifyContent={"center"}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
      </MainContainer>
    </Box>
  );
};

export default Product;
