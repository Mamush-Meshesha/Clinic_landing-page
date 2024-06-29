const Home = () => {

    return (
      <>
        <div className="py-10">
          <div className="bg-white rounded-[2rem] py-32 ">
            <div className="grid grid-cols-2 gap-10 container mx-auto">
              <div>
                <h1 className="text-6xl font-bold font-fan">
                  Advanced medical care for patients
                </h1>
                <p className="py-10">
                  An ultrasound is an imaging test that uses sound waves to make
                  pictures of organs, tissues, and other structures inside your
                  body. It allows your health care provider to see into your
                  body without surgery. Ultrasound is also called
                  ultrasonography or sonography
                </p>
                <button className="bg-[#0b74fa] w-[10.6rem] h-[3.3rem] rounded-full text-white">
                  Get started
                </button>
              </div>
              <div>
                <img
                  src="./ultra.jpg"
                  alt=""
                  className="h-[30rem] w-[60rem] object-cover rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>
        {/* about page */}
        <div className=" bg-white rounded-[2rem] py-10 ">
          <div className="grid grid-cols-2 gap-10 container mx-auto py-10">
            <h1 className="text-6xl font-bold font-fan">About Us</h1>
            <p>
              An ultrasound is an imaging test that uses sound waves to make
              pictures of organs, tissues, and other structures inside your
              body. It allows your health care provider to see into your body
              without surgery. Ultrasound is also called ultrasonography or
              sonography
            </p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-10 py-10">
            <div className=" bg-white rounded-[2rem] py-20 ">
              <div className=" flex justify-center">
                <div
                  className="w-[300px] h-[200px] border rounded-md  shadow-2xl -mb-[50px] "
                  style={{ transform: "rotate(180deg)" }}
                >
                  <h1 className="font-fan rotate-180 p-10 text-4xl">
                    We care about you!
                  </h1>
                </div>
              </div>
              <h1 className="font-fan text-4xl font-bold  pt-20 pb-5 px-10">
                What We Do
              </h1>
              <p className="text-2xl px-10">
                An ultrasound is an imaging test that uses sound waves to make
                pictures of organs, tissues, and other structures inside your
                body. It allows your health care provider to see into your body
                without surgery. Ultrasound is also called ultrasonography or
                sonography
              </p>
            </div>
            <div className=" bg-white rounded-[2rem] py-20 ">
              <div className="flex justify-center ">
                <img
                  src="./equip.jpg"
                  alt=""
                  className="w-[40rem] rounded-lg "
                />
              </div>
              <div className="pt-5 px-10">
                <h1 className="font-fan text-4xl font-bold">
                  Our Technologies
                </h1>
                <p className="text-2xl  pt-5">
                  An ultrasound is an imaging test that uses sound waves to make
                  pictures of organs, tissues, and other structures inside your
                  body. It allows your health care provider to see into your
                  body without surgery. Ultrasound is also called
                  ultrasonography or sonography
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home