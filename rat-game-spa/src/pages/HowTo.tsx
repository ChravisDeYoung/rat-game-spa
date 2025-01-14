import { faArrowRight, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { CircleIconButton } from "../components/CircleIconButton";
import { RatEars } from "../components/RatEars";
import { RatBody } from "../components/RatBody";

const instructions = [
  "each screen will present three cue words that are linked by a fourth word, which is the correct answer",
  "the ear color of the RAT represents the difficulty of that remote association test",
  "if a question is too hard, you can skip it by clicking on the RAT's tail or by pressing the right arrow key on your keyboard",
  "every time you answer a test correctly, you will get points and some time added to the clock - the harder the test, the more points you get",
];

interface SqlInfo {
  css: string;
  subreportOrder: number;
  eqName: string;
  eqNum: string;
  location: string;
  eqTagNum: string;
  datakey: string;
}

function HowToPage() {
  const [page, setPage] = useState<number>(0);
  const [color, setColor] = useState<string>("bg-difficulty-very-easy");
  const [pointValue, setPointValue] = useState<number>(1);

  // const words = ["cottage", "swiss", "cake"];

  const generateSql = (names: string[], info: SqlInfo): string => {
    var query: string = "";
    var sortOrder: number = 1;

    for (let question = 1; question <= names.length; question++) {
      query += `INSERT [dbo].[DataField] ([Name], [Description], [DataType], [InputType], [MinValue], [MaxValue], [isVisible], [SetPoint], [Units], [Source], [Required], [CssClass], [Subreport], [SortOrder], [DataTag], [ReferenceID], [DropDownText], [DropDownValue], [FormulaType], [dayOfWeek], [columnNumber], [decimalFraction], [subReportOrder], [ReportColumn], [ReportRow], [showTrend], [MinSpecValue], [MaxSpecValue], [Instructions], [reportingLevel], [subsection], [DataKey], [ReferenceKey], [ReferenceAddHours], [holdLastValue], [columnLimit], [ManagementField], [ShiftRounds], [FCARequired], [EnableFCA], [URL], [URLTitle], [AspenExportTag]) VALUES (N'${names[question - 1]}', N'${names[question - 1]}', 2, 1101, 0.0000, 0.0000, 1, 0.0000, N'', N'', N'123456789', N'bldg-5-4th-floor-${info.css}-${question}', N'Operator Asset Care Bldg 5 4th Floor', ${sortOrder++}, N'', 0, N'', N'', 0, N'0', 0, 2, ${info.subreportOrder}, N'0', N'0', 0, 0.0000, 0.0000, N'', 0, N'${info.eqName};${info.eqNum};${info.location};${info.eqTagNum}', N'BLDG_5_4TH_FLOOR_${info.datakey}_${question}', N'', 0, 0, 0, 0, 1, NULL, NULL, NULL, NULL, NULL)
      INSERT [dbo].[DataField] ([Name], [Description], [DataType], [InputType], [MinValue], [MaxValue], [isVisible], [SetPoint], [Units], [Source], [Required], [CssClass], [Subreport], [SortOrder], [DataTag], [ReferenceID], [DropDownText], [DropDownValue], [FormulaType], [dayOfWeek], [columnNumber], [decimalFraction], [subReportOrder], [ReportColumn], [ReportRow], [showTrend], [MinSpecValue], [MaxSpecValue], [Instructions], [reportingLevel], [subsection], [DataKey], [ReferenceKey], [ReferenceAddHours], [holdLastValue], [columnLimit], [ManagementField], [ShiftRounds], [FCARequired], [EnableFCA], [URL], [URLTitle], [AspenExportTag]) VALUES (N'${names[question - 1]} Notes', N'${names[question - 1]} Notes', 4, 1101, 0.0000, 0.0000, 1, 0.0000, N'', N'', N'123456789', N'bldg-5-4th-floor-${info.css}-${question}-notes', N'Operator Asset Care Bldg 5 Basement and 4th Floor', ${sortOrder++}, N'', 0, N'', N'', 0, N'0', 0, 2, ${info.subreportOrder}, N'0', N'0', 0, 0.0000, 0.0000, N'', 0, N'${info.eqName};${info.eqNum};${info.location};${info.eqTagNum}', N'BLDG_5_4TH_FLOOR_${info.datakey}_${question}_NOTES', N'', 0, 0, 0, 0, 1, NULL, NULL, NULL, NULL, NULL)`
    }

    return query;
  }

  let temp = "";
  
  temp += generateSql([
      "1. Ensure equipment is clean.",
      "2. Check for damaged screen, gasket, or door.",
      "3. Check for leaks on hoses and flanges.",
      "4. Check for plugged nozzles.",
    ], 
    { 
      css: "1-fiber-separation-dsm-screen", 
      subreportOrder: 1, 
      eqName: "#1 Fiber Separation DSM Screen", 
      eqNum: "N005SC05002", 
      location: "Bld 5 4th Floor", 
      eqTagNum: "5SC05002", 
      datakey: "1_FIBER_SEPARATION_DSM_SCREEN" });
  
  temp += generateSql([
      "1. Ensure equipment is clean.",
      "2. Check for damaged screen, gasket, or door.",
      "3. Check for leaks on hoses and flanges.",
      "4. Check for plugged nozzles.",
    ], 
    { 
      css: "2-fiber-separation-dsm-screen", 
      subreportOrder: 2, 
      eqName: "#2 Fiber Separation DSM Screen", 
      eqNum: "N005SC05003", 
      location: "Bld 5 4th Floor", 
      eqTagNum: "5SC05003", 
      datakey: "2_FIBER_SEPARATION_DSM_SCREEN" });
  
  temp += generateSql([
      "1. Ensure equipment is clean.",
      "2. Check for damaged screen, gasket, or door.",
      "3. Check for leaks on hoses and flanges.",
      "4. Check for plugged nozzles.",
    ], 
    { 
      css: "3-fiber-separation-dsm-screen", 
      subreportOrder: 3, 
      eqName: "#3 Fiber Separation DSM Screen", 
      eqNum: "N005SC05004", 
      location: "Bld 5 4th Floor", 
      eqTagNum: "5SC05004", 
      datakey: "3_FIBER_SEPARATION_DSM_SCREEN" });
  
  temp += generateSql([
      "1. Ensure equipment is clean.",
      "2. Check for damaged screen, gasket, or door.",
      "3. Check for leaks on hoses and flanges.",
      "4. Check for plugged nozzles.",
    ], 
    { 
      css: "4-fiber-separation-dsm-screen", 
      subreportOrder: 4, 
      eqName: "#4 Fiber Separation DSM Screen", 
      eqNum: "N005SC05005", 
      location: "Bld 5 4th Floor", 
      eqTagNum: "5SC05005", 
      datakey: "4_FIBER_SEPARATION_DSM_SCREEN" });
  
  temp += generateSql([
      "1. Ensure equipment is clean.",
      "2. Check for damaged screen, gasket, or door.",
      "3. Check for leaks on hoses and flanges.",
      "4. Check for plugged nozzles.",
    ], 
    { 
      css: "5-fiber-separation-dsm-screen", 
      subreportOrder: 5, 
      eqName: "#5 Fiber Separation DSM Screen", 
      eqNum: "N005SC05010", 
      location: "Bld 5 4th Floor", 
      eqTagNum: "5SC05010", 
      datakey: "5_FIBER_SEPARATION_DSM_SCREEN" });
  
  temp += generateSql([
      "1. Ensure equipment is clean.",
      "2. Check for damaged screen, gasket, or door.",
      "3. Check for leaks on hoses and flanges.",
      "4. Check for plugged nozzles.",
    ], 
    { 
      css: "6-fiber-separation-dsm-screen", 
      subreportOrder: 6, 
      eqName: "#6 Fiber Separation DSM Screen", 
      eqNum: "N005SC05011", 
      location: "Bld 5 4th Floor", 
      eqTagNum: "5SC05011", 
      datakey: "6_FIBER_SEPARATION_DSM_SCREEN" });
  
  temp += generateSql([
      "1. Ensure equipment is clean.",
      "2. Check for damaged screen, gasket, or door.",
      "3. Check for leaks on hoses and flanges.",
      "4. Check for plugged nozzles.",
    ], 
    { 
      css: "1-fiber-wash-dsm-screen", 
      subreportOrder: 7, 
      eqName: "#1 Fiber Wash DSM Screen", 
      eqNum: "N005SC050", 
      location: "Bld 5 4th Floor", 
      eqTagNum: "5SC050", 
      datakey: "1_FIBER_WASH_DSM_SCREEN" });

    temp += generateSql([
      "1. Ensure equipment is clean.",
      "2. Check for damaged screen, gasket, or door.",
      "3. Check for leaks on hoses and flanges.",
      "4. Check for plugged nozzles.",
    ], 
    { 
      css: "2-fiber-wash-dsm-screen", 
      subreportOrder: 8, 
      eqName: "#2 Fiber Wash DSM Screen", 
      eqNum: "N005SC050", 
      location: "Bld 5 4th Floor", 
      eqTagNum: "5SC050", 
      datakey: "2_FIBER_WASH_DSM_SCREEN" });
  
    temp += generateSql([
      "1. Ensure equipment is clean.",
      "2. Check for damaged screen, gasket, or door.",
      "3. Check for leaks on hoses and flanges.",
      "4. Check for plugged nozzles.",
    ], 
    { 
      css: "3-fiber-wash-dsm-screen", 
      subreportOrder: 9, 
      eqName: "#3 Fiber Wash DSM Screen", 
      eqNum: "N005SC050", 
      location: "Bld 5 4th Floor", 
      eqTagNum: "5SC050", 
      datakey: "3_FIBER_WASH_DSM_SCREEN" });
  
    temp += generateSql([
      "1. Ensure equipment is clean.",
      "2. Check for damaged screen, gasket, or door.",
      "3. Check for leaks on hoses and flanges.",
      "4. Check for plugged nozzles.",
    ], 
    { 
      css: "4-fiber-wash-dsm-screen", 
      subreportOrder: 10, 
      eqName: "#4 Fiber Wash DSM Screen", 
      eqNum: "N005SC050", 
      location: "Bld 5 4th Floor", 
      eqTagNum: "5SC050", 
      datakey: "4_FIBER_WASH_DSM_SCREEN" });
  
  console.log(temp);

  return (
    <>
      <header>
        {page === instructions.length - 1 ? (
          // on the last page
          <CircleIconButton
            faIcon={faX}
            redirectPath="/"
            className="absolute right-3 top-3"
            dataCy="home-link"
          />
        ) : (
          <CircleIconButton
            faIcon={faArrowRight}
            onClick={() => setPage(page + 1)}
            className="absolute right-3 top-3"
            dataCy="next-link"
          />
        )}

        <h1 className="font-bold text-big tracking-widest mt-20">how to</h1>
      </header>

      <section className="flex flex-col items-center">
        <p className="text-medium w-3/4 font-bold">{instructions[page]}</p>
      </section>

      {page === 3 ? (
        <>
          <div className="w-full">
            <button
              className="bg-difficulty-very-easy my-[0.1rem] text-small w-2/3 max-w-sm mx-auto"
              onClick={() => {
                setColor("bg-difficulty-very-easy");
                setPointValue(1);
              }}
            >
              <span className="bg-black h-full block m-auto py-2 w-1/2 text-yellow">
                very easy
              </span>
            </button>

            <button
              className="bg-difficulty-easy my-[0.1rem] text-small w-2/3 max-w-sm mx-auto"
              onClick={() => {
                setColor("bg-difficulty-easy");
                setPointValue(2);
              }}
            >
              <span className="bg-black h-full block m-auto py-2 w-1/2 text-yellow">
                easy
              </span>
            </button>

            <button
              className="bg-difficulty-medium my-[0.1rem] text-small w-2/3 max-w-sm mx-auto"
              onClick={() => {
                setColor("bg-difficulty-medium");
                setPointValue(3);
              }}
            >
              <span className="bg-black h-full block m-auto py-2 w-1/2 text-yellow">
                medium
              </span>
            </button>

            <button
              className="bg-difficulty-hard my-[0.1rem] text-small w-2/3 max-w-sm mx-auto"
              onClick={() => {
                setColor("bg-difficulty-hard");
                setPointValue(4);
              }}
              data-cy="difficulty-hard-btn"
            >
              <span className="bg-black h-full block m-auto py-2 w-1/2 text-yellow">
                hard
              </span>
            </button>

            <button
              className="bg-difficulty-very-hard my-[0.1rem] text-small w-2/3 max-w-sm mx-auto"
              onClick={() => {
                setColor("bg-difficulty-very-hard");
                setPointValue(5);
              }}
            >
              <span className="bg-black h-full block m-auto py-2 w-1/2 text-yellow">
                very hard
              </span>
            </button>
          </div>

          <div className="w-full">
            {/* Ears */}
            <div className="flex w-4/5 max-w-sm relative top-5 justify-between mx-auto">
              <div className="bg-gray rounded-tl-full rounded-tr-full rounded-bl-full h-24 w-24 inline-flex justify-center items-center">
                <div
                  className={`h-12 w-12 rounded-tl-full rounded-tr-full rounded-bl-full mt-3 ml-1 ${color}`}
                  data-cy="left-ear"
                ></div>
              </div>
              <div className="bg-gray rounded-tl-full rounded-tr-full rounded-br-full h-24 w-24 inline-flex justify-center items-center">
                <div
                  className={`h-12 w-12 rounded-tl-full rounded-tr-full rounded-br-full mt-3 mr-1 ${color}`}
                  data-cy="right-ear"
                ></div>
              </div>
            </div>

            {/* Body */}
            <p className="bg-gray py-2 text-medium first:rounded-t-2xl w-2/3 max-w-xs mx-auto mb-5">
              {pointValue} point{pointValue > 1 && "s"}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <div className={`w-full ${page === 2 && "opacity-40"}`}>
              <RatEars
                className={`mx-auto ${page === 0 && "opacity-40"}`}
                color="#FF9B9B"
              />

              <RatBody
                className={`mx-auto ${page === 1 && "opacity-40"}`}
                words={["cottage", "swiss", "cake"]}
              />
            </div>

            {/* Answer */}
            <div
              className={`mt-5 w-2/3 max-w-xs ${
                page === 0 || page === 3 || "opacity-40"
              }`}
            >
              <p className="w-full py-2 text-center border-2 border-gray-dark text-medium bg-gray rounded-b-2xl">
                cheese
              </p>
            </div>

            {/* Skip */}
            <button
              className={`bg-pink max-w-xs active:bg-pink-dark lg:hover:bg-pink-dark border-2 border-b-4 border-pink-dark rounded-2xl py-1 mt-2 w-2/3 text-center text-small ${
                page === 2 || page === 3 || "opacity-40"
              }`}
              disabled
            >
              skip
            </button>
          </div>
          <div>&nbsp;</div>
        </>
      )}
    </>
  );
}

export default HowToPage;
