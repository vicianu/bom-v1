import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import MainContainer from "../layout/mainContainer";

const footerIcon = [
  {
    icon: <BsFacebook />,
    href: "https://www.facebook.com/Bestofmarketmanagement",
  },
  {
    icon: <GrInstagram />,
    href: "instagram.com",
  },
  {
    icon: <BsTwitter />,
    href: "twitter.com",
  },
  {
    icon: <BsYoutube />,
    href: "youtube.com",
  },
];

const FooterData = [
  {
    title: "Bom.mn",
    footerItem: [
      {
        href: "/",
        text: "Бидний тухай",
      },
      {
        href: "/",
        text: "Бүтэээгдэхүүн үйлчилгээ",
      },
      {
        href: "/",
        text: "Ажлын байр",
      },
    ],
  },
  {
    title: "Санхүүгийн үйлчилгээнүүд",
    footerItem: [
      {
        href: "/",
        text: "Үнэлгээ",
      },
      {
        href: "/",
        text: "Зээлийн тооцоолуур",
      },
      {
        href: "/",
        text: "Ажлын байр",
      },
    ],
  },
  {
    title: "Тусламж",
    footerItem: [
      {
        href: "/",
        text: "Хэрэглэх заавар",
      },
      {
        href: "/",
        text: "Түгээмэл асуултууд",
      },
      {
        href: "/",
        text: "Нууцлалын баталгаа",
      },
      {
        href: "/",
        text: "Хамтран ажиллагаа",
      },
      {
        href: "/feedback",
        text: "Санал хүсэлт",
      },
    ],
  },
];

const Footer = () => {
  return (
    <Box bgColor={"white"} as="section" id="footer">
      <MainContainer>
        <Grid templateColumns={"repeat(6,1fr)"} gap={10} py={10}>
          {FooterData.map((d, index) => {
            return (
              <GridItem key={index}>
                <Stack>
                  <Heading variant={"smallHeading"}>{d.title}</Heading>
                  {d.footerItem &&
                    d.footerItem.map((a, i) => {
                      return (
                        <Stack key={i}>
                          <Link
                            href={a.href}
                            _hover={{
                              color: "mainBlossom",
                            }}
                          >
                            <Text>{a.text}</Text>
                          </Link>
                        </Stack>
                      );
                    })}
                </Stack>
              </GridItem>
            );
          })}
          <GridItem>
            <Stack>
              <Heading variant={"smallHeading"}>Хаяг</Heading>
              <Text>
                Үндсэн хуулийн гудамж 2-р хороо, Баянгол дүүрэг, Улаанбаатар
                хот, Монгол улс, Рокмон Бюлдинг - 1003 тоот
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Stack>
                <Heading variant={"smallHeading"}>Холбоо барих</Heading>
                <Stack>
                  <Text>Утас: 9599-2333</Text>
                  <Text>bomarketm@gmail.com</Text>
                </Stack>
              </Stack>
              <Stack>
                <Heading variant={"smallHeading"}>Холбоо барих</Heading>
                <Stack direction={"row"} gap={2}>
                  {footerIcon.map(({ ...props }, index) => {
                    return (
                      <Link
                        href={props.href}
                        target="_blank"
                        key={index}
                        _hover={{
                          color: "mainBlossom",
                          transform: "scale(1.2)",
                        }}
                      >
                        <Text fontSize={"18px"}>{props.icon}</Text>
                      </Link>
                    );
                  })}
                </Stack>
              </Stack>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Heading variant={"smallHeading"}>Апп татах</Heading>
              <Heading variant={"mediumHeading"}>Coming soon...</Heading>
              {/* <Image
                                        src="./utils/download-store.png"
                                        alt="app stores"
                                   /> */}
            </Stack>
          </GridItem>
        </Grid>
      </MainContainer>
      <Box py={3} borderTop={"2px"} borderColor={"bgGrey"}>
        <MainContainer>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading>Bom.mn</Heading>
            <Heading variant={"smallHeading"} color={"grey"}>
              Зохиогчийн эрхээр хамгаалагдсан
            </Heading>
          </Flex>
        </MainContainer>
      </Box>
    </Box>
  );
};

export default Footer;
