import {
     Box,
     Button,
     Checkbox,
     Flex,
     Heading,
     Input,
     Link,
     Select,
     Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FilterStack from "../../util/filterStack";

const filters = {
     districts: [
          {
               district: "баянгол",
               towns: ["10-р хороолол", "25-р эмийн сан", "3-р хороолол"],
          },
          {
               district: "баянзүрх",
               towns: ["1000 оюутны байр", "13-р хороолол", "1₮-р хороолол"],
          },
     ],
     rooms: ["1", "2", "3", "4", "5", "5+"],
     bathrooms: ["1", "2", "2+"],
     masterBedrooms: ["байхгүй", "1", "2", "2+"],
     window: ["вакум", "модон", "төмөр вакум", "модон вакум"],
     windows: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10+"],
     doors: ["бүргэд", "төмөр", "мод"],
     balconies: ["1", "2", "3", "4", "5", "5+"],
     floor: ["паркет", "ламинат", "плита", "мод", "чулуу", "бетон", "цемент"],
     garage: ["байгаа", "байхгүй"],
     condition: ["банкны лизингтэй", "хувь лизингтэй", "бэлэн"],
     barter: ["байгаа", "байхгүй"],
};
const categories = [
     {
          category: "Үл хөдлөх хөрөнгө",
          categories: [
               {
                    category: "Газар",
                    filters: [
                         "Зарын гарчиг... 100 тэмдэгтэд багтаан бичнэ үү. ",
                         "Газрын зориулалт",
                         "Эзэмшлийн хэлбэр",
                         "Утас",
                         "Үнэ",
                         "Талбай",
                         "Нэгж талбайн үнэ",
                         "Дүүрэг",
                         "Хороо",
                         "Байршил",
                         "Гэрчилгээ олгосон он",
                         "Хүчинтэй хугацаа (жил)",
                         "Бартер",
                         "Төлбөрийн нөхцөл",
                         "Газрын зурагт байршил сонго",
                         "Хөрөнгийн зураг",
                         "Кадастрын зураг",
                         "Зарын дэлгэрэнгүй... 10000 тэмдэгтэд багтаан бичнэ үү.",
                    ],
               },
               {
                    category: "Оффис",

                    filters: [
                         "Зарын гарчиг... 100 тэмдэгтэд багтаан бичнэ үү. ",
                         "Утас",
                         "Үнэ",
                         "Талбай",
                         "Нэгж талбайн үнэ",
                         "Дүүрэг",
                         "Хороо",
                         "Байршил",
                         "Оффисын нэр",
                         "Ашиглалтад орсон он",
                         "Барилгын давхар",
                         "Хэдэн давхарт",
                         "Бартер",
                         "Төлбөрийн нөхцөл",
                         "Газрын зурагт байршил сонго",
                         "Хөрөнгийн зураг",
                         "План зураг",
                         "Зарын дэлгэрэнгүй... 10000 тэмдэгтэд багтаан бичнэ үү.",
                    ],
               },
          ],
     },
     {
          category: "Үл хөдлөх хөрөнгө",
          categories: [{ category: "Газар" }, { category: "Оффис" }],
     },
];

const FilterLayout = () => {
     const [filter, setFilter] = useState({
          district: "",
          location: "",
          room: "",
          barter: "",
          condition: "",
          garage: "",
          floor: "",
          balconies: "",
          doors: "",
          window: "",
          windows: "",
          bathroom: "",
          masterBedroom: "",
     });

     return (
          <>
               <Box
                    maxWidth={"20%"}
                    flex="0 0 20%"
                    bgColor={"white"}
                    p={5}
                    rounded={10}
                    boxShadow="base"
               >
                    <FilterStack>
                         <Heading variant={"smallHeading"} mb={2}>
                              Lorem, ipsum dolor.
                         </Heading>
                         {categories.map(({ ...props }, id) => {
                              return (
                                   <Link href={props.href} key={props.id}>
                                        <Text>{props.category}</Text>
                                   </Link>
                              );
                         })}
                    </FilterStack>

                    <FilterStack>
                         <Heading variant={"smallHeading"} mb={2}>
                              Зарах & Түрээслүүлэх
                         </Heading>
                         <Checkbox borderColor={"mainBlue"} defaultChecked>
                              Зарна
                         </Checkbox>
                         <Checkbox>Түрээслүүлнэ</Checkbox>
                    </FilterStack>
                    <FilterStack>
                         <Heading variant={"smallHeading"} mb={2}>
                              Байршлаар
                         </Heading>
                         {/* <AspectRatio ratio={16 / 9}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
     </AspectRatio> */}
                    </FilterStack>

                    <FilterStack
                         borderBottom={"2px solid "}
                         borderColor="bgGrey"
                    >
                         <Heading variant={"smallHeading"}>
                              Нэмэлт хайлт
                         </Heading>
                         {filters && (
                              <>
                                   {filters.districts && (
                                        <Select
                                             placeholder="Дүүрэг"
                                             variant="outline"
                                             borderWidth="2px"
                                             color={"mainBlossom"}
                                             onChange={(e) =>
                                                  setFilter({
                                                       ...filter,
                                                       district: e.target.value,
                                                  })
                                             }
                                             value={filter.district}
                                        >
                                             {filters.districts.map(
                                                  (d, ind) => {
                                                       return (
                                                            <option
                                                                 key={ind}
                                                                 value={ind.toString()}
                                                            >
                                                                 {d.district}
                                                            </option>
                                                       );
                                                  }
                                             )}
                                        </Select>
                                   )}

                                   {filter.district != "" && (
                                        <Select
                                             placeholder="Байршил"
                                             variant="outline"
                                             borderWidth="2px"
                                             color={"mainBlossom"}
                                             onChange={(e) =>
                                                  setFilter({
                                                       ...filter,
                                                       location: e.target.value,
                                                  })
                                             }
                                             value={filter.location}
                                        >
                                             {filters.districts[
                                                  parseInt(filter.district)
                                             ].towns &&
                                                  filters.districts[
                                                       parseInt(filter.district)
                                                  ].towns.map((d, i) => {
                                                       return (
                                                            <option
                                                                 key={i}
                                                                 value={`${i}`}
                                                            >
                                                                 {d}
                                                            </option>
                                                       );
                                                  })}
                                        </Select>
                                   )}
                                   {filters.rooms && (
                                        <Select
                                             placeholder="Өрөөний тоо"
                                             variant="outline"
                                             borderWidth="2px"
                                             color={"mainBlossom"}
                                             onChange={(e) =>
                                                  setFilter({
                                                       ...filter,
                                                       room: e.target.value,
                                                  })
                                             }
                                             value={filter.room}
                                        >
                                             {filters.rooms.map((d, ind) => {
                                                  return (
                                                       <option
                                                            key={ind}
                                                            value={ind.toString()}
                                                       >
                                                            {d}
                                                       </option>
                                                  );
                                             })}
                                        </Select>
                                   )}
                                   {filters.masterBedrooms && (
                                        <Select
                                             placeholder="Мастер унтлагийн өрөөний тоо"
                                             variant="outline"
                                             borderWidth="2px"
                                             color={"mainBlossom"}
                                             onChange={(e) =>
                                                  setFilter({
                                                       ...filter,
                                                       masterBedroom:
                                                            e.target.value,
                                                  })
                                             }
                                             value={filter.masterBedroom}
                                        >
                                             {filters.masterBedrooms.map(
                                                  (d, ind) => {
                                                       return (
                                                            <option
                                                                 key={ind}
                                                                 value={ind.toString()}
                                                            >
                                                                 {d}
                                                            </option>
                                                       );
                                                  }
                                             )}
                                        </Select>
                                   )}
                                   {filters.bathrooms && (
                                        <Select
                                             placeholder="Угаалгын өрөөний тоо"
                                             variant="outline"
                                             borderWidth="2px"
                                             color={"mainBlossom"}
                                             onChange={(e) =>
                                                  setFilter({
                                                       ...filter,
                                                       bathroom: e.target.value,
                                                  })
                                             }
                                             value={filter.bathroom}
                                        >
                                             {filters.bathrooms.map(
                                                  (d, ind) => {
                                                       return (
                                                            <option
                                                                 key={ind}
                                                                 value={ind.toString()}
                                                            >
                                                                 {d}
                                                            </option>
                                                       );
                                                  }
                                             )}
                                        </Select>
                                   )}
                                   {filters.window && (
                                        <Select
                                             placeholder="Цонх"
                                             variant="outline"
                                             borderWidth="2px"
                                             color={"mainBlossom"}
                                             onChange={(e) =>
                                                  setFilter({
                                                       ...filter,
                                                       window: e.target.value,
                                                  })
                                             }
                                             value={filter.window}
                                        >
                                             {filters.window.map((d, ind) => {
                                                  return (
                                                       <option
                                                            key={ind}
                                                            value={ind.toString()}
                                                       >
                                                            {d}
                                                       </option>
                                                  );
                                             })}
                                        </Select>
                                   )}
                                   {filters.windows && (
                                        <Select
                                             placeholder="Цонхны тоо"
                                             variant="outline"
                                             borderWidth="2px"
                                             color={"mainBlossom"}
                                             onChange={(e) =>
                                                  setFilter({
                                                       ...filter,
                                                       windows: e.target.value,
                                                  })
                                             }
                                             value={filter.windows}
                                        >
                                             {filters.windows.map((d, ind) => {
                                                  return (
                                                       <option
                                                            key={ind}
                                                            value={ind.toString()}
                                                       >
                                                            {d}
                                                       </option>
                                                  );
                                             })}
                                        </Select>
                                   )}
                                   {filters.doors && (
                                        <Select
                                             placeholder="Хаалга"
                                             variant="outline"
                                             borderWidth="2px"
                                             color={"mainBlossom"}
                                             onChange={(e) =>
                                                  setFilter({
                                                       ...filter,
                                                       doors: e.target.value,
                                                  })
                                             }
                                             value={filter.doors}
                                        >
                                             {filters.doors.map((d, ind) => {
                                                  return (
                                                       <option
                                                            key={ind}
                                                            value={ind.toString()}
                                                       >
                                                            {d}
                                                       </option>
                                                  );
                                             })}
                                        </Select>
                                   )}
                                   {filters.balconies && (
                                        <Select
                                             placeholder="Тагтны тоо"
                                             variant="outline"
                                             borderWidth="2px"
                                             color={"mainBlossom"}
                                             onChange={(e) =>
                                                  setFilter({
                                                       ...filter,
                                                       balconies:
                                                            e.target.value,
                                                  })
                                             }
                                             value={filter.balconies}
                                        >
                                             {filters.balconies.map(
                                                  (d, ind) => {
                                                       return (
                                                            <option
                                                                 key={ind}
                                                                 value={ind.toString()}
                                                            >
                                                                 {d}
                                                            </option>
                                                       );
                                                  }
                                             )}
                                        </Select>
                                   )}
                                   {filters.floor && (
                                        <Select
                                             placeholder="Шал"
                                             variant="outline"
                                             borderWidth="2px"
                                             color={"mainBlossom"}
                                             onChange={(e) =>
                                                  setFilter({
                                                       ...filter,
                                                       floor: e.target.value,
                                                  })
                                             }
                                             value={filter.floor}
                                        >
                                             {filters.floor.map((d, ind) => {
                                                  return (
                                                       <option
                                                            key={ind}
                                                            value={ind.toString()}
                                                       >
                                                            {d}
                                                       </option>
                                                  );
                                             })}
                                        </Select>
                                   )}
                                   {filters.garage && (
                                        <Select
                                             placeholder="Гараж"
                                             variant="outline"
                                             borderWidth="2px"
                                             color={"mainBlossom"}
                                             onChange={(e) =>
                                                  setFilter({
                                                       ...filter,
                                                       garage: e.target.value,
                                                  })
                                             }
                                             value={filter.garage}
                                        >
                                             {filters.garage.map((d, ind) => {
                                                  return (
                                                       <option
                                                            key={ind}
                                                            value={ind.toString()}
                                                       >
                                                            {d}
                                                       </option>
                                                  );
                                             })}
                                        </Select>
                                   )}
                                   {filters.condition && (
                                        <Select
                                             placeholder="Төлбөрийн нөхцөл"
                                             variant="outline"
                                             borderWidth="2px"
                                             color={"mainBlossom"}
                                             onChange={(e) =>
                                                  setFilter({
                                                       ...filter,
                                                       condition:
                                                            e.target.value,
                                                  })
                                             }
                                             value={filter.condition}
                                        >
                                             {filters.condition.map(
                                                  (d, ind) => {
                                                       return (
                                                            <option
                                                                 key={ind}
                                                                 value={ind.toString()}
                                                            >
                                                                 {d}
                                                            </option>
                                                       );
                                                  }
                                             )}
                                        </Select>
                                   )}
                                   {filters.barter && (
                                        <Select
                                             placeholder="Бартер"
                                             variant="outline"
                                             borderWidth="2px"
                                             color={"mainBlossom"}
                                             onChange={(e) =>
                                                  setFilter({
                                                       ...filter,
                                                       barter: e.target.value,
                                                  })
                                             }
                                             value={filter.barter}
                                        >
                                             {filters.barter.map((d, ind) => {
                                                  return (
                                                       <option
                                                            key={ind}
                                                            value={ind.toString()}
                                                       >
                                                            {d}
                                                       </option>
                                                  );
                                             })}
                                        </Select>
                                   )}
                              </>
                         )}

                         <Flex alignItems={"center"} gap={2}>
                              <Input
                                   type="number"
                                   placeholder="Дээд"
                                   variant="outline"
                                   borderWidth="2px"
                              />
                              <Text>-</Text>
                              <Input
                                   type="number"
                                   placeholder="Доод"
                                   variant="outline"
                                   borderWidth="2px"
                              />
                         </Flex>
                         <Flex alignItems={"center"} gap={2}>
                              <Input
                                   type="number"
                                   placeholder="Дээд"
                                   variant="outline"
                                   borderWidth="2px"
                              />
                              <Text>-</Text>
                              <Input
                                   type="number"
                                   placeholder="Доод"
                                   variant="outline"
                                   borderWidth="2px"
                              />
                         </Flex>
                         <Button variant={"blueButton"} mx={4}>
                              Хайх
                         </Button>
                    </FilterStack>
               </Box>
          </>
     );
};

export default FilterLayout;
