import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Home = () => {
  const general = [
    { value: "Comprehensive medical examinations and consultations" },
    { value: " Diagnosis and treatment of common illnesses and conditions" },
    {
      value: "Preventive healthcare, including annual check-ups and screenings",
    },
    {
      value:
        "  Management of chronic conditions, such as diabetes, hypertension, and asthma",
    },
  ];

  const ultraSound = [
    { value: "Diagnostic ultrasound imaging for various parts of the body" },
    {
      value:
        "Abdominal ultrasound for evaluating the liver, kidneys, gallbladder, and other organs",
    },
    {
      value:
        "Obstetric and gynecological ultrasound for pregnancy monitoring and women's health",
    },
    {
      value:
        "Musculoskeletal ultrasound for assessing injuries and conditions of the joints, tendons, and muscles",
    },
  ];

  const labratory = [
    {
      value:
        "On-site laboratory with a wide range of diagnostic testing capabilities",
    },
    {
      value:
        "Blood tests, including comprehensive metabolic panels, lipid profiles, and specialized tests",
    },
    {
      value: "Urine analysis and other specimen testing",
    },
    {
      value:
        "Rapid turnaround for results, ensuring timely diagnosis and treatment",
    },
  ];

  return (
    <>
      <div id="home" className="py-10 overflow-x-hidden">
        <div className="bg-white rounded-[2rem] md:py-32 py-10 w-[100%] ">
          <div className="lg:grid lg:grid-cols-2 gap-10 w-full flex flex-col md:container md:mx-auto">
            <div className="px-5 md:px-0">
              <h1 className="md:text-6xl font-bold font-fan text-4xl">
                Advanced medical care for patients
              </h1>
              <p className="py-10">
                An ultrasound is an imaging test that uses sound waves to make
                pictures of organs, tissues, and other structures inside your
                body. It allows your health care provider to see into your body
                without surgery. Ultrasound is also called ultrasonography or
                sonography
              </p>
              <a href="#start">
                <button className="bg-[#0b74fa] w-[10.6rem] h-[3.3rem] rounded-full text-white">
                  Get started
                </button>
              </a>
            </div>
            <div className="px-5 md:px-0">
              <img
                src="./ultra.jpg"
                alt=""
                className="md:h-[30rem]  lg:w-[60rem] w-full object-cover rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
      {/* about page */}
      <div id="about" className=" bg-white rounded-[2rem] py-10 ">
        <div className="md:grid md:grid-cols-2 gap-10 md:container md:mx-auto md:py-10 py-2 px-5 md:px-0">
          <h1 className="md:text-6xl text-4xl font-bold font-fan">About Us</h1>

          <p>
            An ultrasound is an imaging test that uses sound waves to make
            pictures of organs, tissues, and other structures inside your body.
            It allows your health care provider to see into your body without
            surgery. Ultrasound is also called ultrasonography or sonography
          </p>
        </div>
      </div>
      <div>
        <div className="md:grid md:grid-cols-2 md:gap-10 md:py-10 py-2">
          <div id="start" className=" bg-white rounded-[2rem] py-20 ">
            <div className=" flex justify-center">
              <div
                className="w-[300px] h-[200px] border rounded-md  shadow-2xl shadow-slate-900 md:shadow-slate-50 -mb-[50px] "
                style={{ transform: "rotate(180deg)" }}
              >
                <h1 className="font-fan rotate-180 p-10 text-4xl">
                  We care about you!
                </h1>
              </div>
            </div>
            <h1 className="font-fan text-4xl font-bold text-green-600  pt-20 pb-5 px-10">
              Who we are
            </h1>
            <p className=" px-10">
              An ultrasound is an imaging test that uses sound waves to make
              pictures of organs, tissues, and other structures inside your
              body. It allows your health care provider to see into your body
              without surgery. Ultrasound is also called ultrasonography or
              sonography
            </p>
          </div>
          <div className=" bg-white mt-4 md:mt-0 rounded-[2rem] py-20 ">
            <div className="flex justify-center ">
              <img src="./equip.jpg" alt="" className="w-[40rem] rounded-lg " />
            </div>
            <div className="pt-5 px-10">
              <h1 className="font-fan text-4xl font-bold text-green-600">
                Our Technologies
              </h1>
              <p className=" pt-5">
                An ultrasound is an imaging test that uses sound waves to make
                pictures of organs, tissues, and other structures inside your
                body. It allows your health care provider to see into your body
                without surgery. Ultrasound is also called ultrasonography or
                sonography
              </p>
            </div>
          </div>
        </div>
        {/* what we do */}
        <div className=" bg-white rounded-[2rem] md:py-20 ">
          <div className="flex justify-center">
            <h1 className="font-fan text-4xl font-bold text-green-600  pt-10 pb-5 px-10">
              what we do
            </h1>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-10  md:py-10">
            <div className=" bg-white md:rounded-[2rem] md:py-20 py-2 border flex justify-center ">
              <div>
                <h1 className="text-green-600 text-3xl capitalize px-5 md:px-0">
                  General medical care
                </h1>
                <br />
                <ul>
                  {general.map((gen, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {" "}
                      <IoCheckmarkDoneOutline className="text-green-700" />{" "}
                      {gen.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className=" bg-white rounded-[2rem] md:py-20 py-4 mt-4 md:mt-4  border flex justify-center ">
              <div>
                <h1 className="text-green-600 text-3xl capitalize px-5 md:px-0">
                  ultrasound
                </h1>
                <br />
                <ul>
                  {ultraSound.map((gen, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {" "}
                      <IoCheckmarkDoneOutline className="text-green-700" />{" "}
                      {gen.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-10 bg-white rounded-[2rem] md:py-20 mt-4 md:mt-0 border flex justify-center">
            <div>
              <h1 className="text-green-600 text-3xl capitalize px-5 md:px-0">
                Full-Service Laboratory
              </h1>
              <br />
              <ul>
                {labratory.map((gen, index) => (
                  <li key={index} className="flex items-center gap-2">
                    {" "}
                    <IoCheckmarkDoneOutline className="text-green-700" />{" "}
                    {gen.value}
                  </li>
                ))}
              </ul>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
