import { Button } from '@/components/ui/button'
import DecorationLine from '@/components/icons/DecorationLine'
import { ArrowRightIcon } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative">
      <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* 光晕效果 - 添加呼吸动画 */}
        <div
          className="absolute top-[-5%] right-[-5%] w-48 h-[400px] rounded-[50%] 
                   bg-gradient-to-b from-sky-300/100 to-transparent blur-3xl
                   animate-pulse"
        />

        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#f4f4f4] rounded-[4px]">
          <div className=" lg:w-1/2 lg:pl-[56px] ">
            <div className="relative mb-4 lg:mb-[60px] lg:mt-6">
              <h1 className="text-5xl font-normal leading-[1.5] ">
                为您追踪最新的罕见病 <br /> 信息及AI问答
              </h1>
              <div className="absolute top-[70px] right-[50px]">
                <DecorationLine className=" w-[182px]" />
              </div>
            </div>

            <Button
              size="lg"
              className="bg-brand-500 hover:bg-brand-600 w-[200px] h-16 text-white px-6 py-3 rounded-md"
            >
              <p className="text-xl leading-[1.5]">试试看</p>
              <ArrowRightIcon className="!w-6 !h-6" />
            </Button>
          </div>

          <div className="relative lg:w-1/2 mt-8 lg:mt-0 lg:flex justify-end">
            <img
              src="/OpenRD_black.png"
              alt="OpenRD logo"
              className="w-[210px] object-contain absolute bottom-16 right-[433px]"
            />
            <img
              src="/hero/hero_1.jpg"
              alt="OpenRD Hero"
              className="w-[477px] h-[512px] rounded-r-[4px] shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
