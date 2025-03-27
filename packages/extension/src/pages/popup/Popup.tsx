import bulbIcon from "@/assets/img/bulb.png"
import carIcon from "@/assets/img/car.png"
import logo from "@/assets/img/logo.png"
import waterIcon from "@/assets/img/water.png"
import { calculateWater, converToLightBulbTime, convertToCarDistance } from "@/utils"

function Popup() {
  const params = new URLSearchParams(window.location.search)
  const tokens = Number(params.get("tokens") || 0)

  return (
    <div className="relative text-center size-full min-h-[600px] min-w-[400px] p-3 overflow-hidden">
      <header className="flex items-center justify-center gap-3">
        <img alt="logo" className="h-10 w-10 pointer-events-none" src={logo} />
        <h1 className="text-2xl font-bold text-green">GreenChat</h1>
      </header>

      <div className="mt-6 text-left px-4">
        <h2 className="text-lg font-semibold mb-2">
          Your chat footprint is roughly equivalent to:
        </h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-white">
            <img src={waterIcon} alt="Water" className="h-6 w-6" />
            <span>
              {calculateWater(tokens)}
              {" "}
              mL of water used.
            </span>
          </li>
          <li className="flex items-center gap-3 text-white">
            <img src={carIcon} alt="Car" className="h-6 w-6" />
            <span>
              {convertToCarDistance(tokens)}
              {" "}
              driven in a car.
            </span>
          </li>
          <li className="flex items-center gap-3 text-white">
            <img src={bulbIcon} alt="Light Bulb" className="h-6 w-6" />
            <span>
              {converToLightBulbTime(tokens)}
              {" "}
              of light bulb use.
            </span>
          </li>
        </ul>

        <p className="mt-4 text-sm text-gray-300 italic">
          Using search engines or online encyclopedias for basic queries can reduce energy consumption and help lower your carbon footprint.
        </p>

        {/* <p className="mt-2 text-sm text-gray-400">
          Token count:
          {" "}
          <span className="font-bold">{tokens}</span>
        </p> */}
      </div>

      <a
        href="https://greenchat-ai.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute text-lg bottom-16 mx-auto text-green hover:underline"
      >
        Learn more
      </a>
    </div>
  )
}

export default Popup
