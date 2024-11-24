import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'

export default function RSSExapmle() {
  return (
    <>
      {/* Information Platform Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <div
              className="absolute bottom-[-20%] left-[-15%] w-[300px] h-[500px] rounded-[50%] 
                    blur-3xl bg-[#bff1e7]"
              style={{
                background: 'radial-gradient(circle at center, #bff1e7 0%, #fff 100%)',
              }}
            />

            {/* <h2 className="text-3xl font-normal mb-4">我们致力于为罕见病患者打造便捷的信息平台</h2> */}
            <h2 className="text-3xl font-normal mb-4">订阅您关注的罕见病，随时自动更新最新信息</h2>
            <div className="w-[866px] h-[650px] bg-white rounded-lg shadow-lg overflow-hidden mt-10 relative">
              <img
                src="/hero/rss_demo.png"
                alt="RSS 订阅演示"
                className="w-[866px] h-[650px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className=" pt-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center  px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <div
              className="absolute top-[-4%] right-[-15%] w-[300px] h-[500px] rounded-[50%] 
                    blur-3xl "
              style={{
                background: 'radial-gradient(circle at center, #c9ecfa 0%, #fff 100%)',
              }}
            />
            <h2 className="text-3xl font-normal mb-4">无障碍设计</h2>
            <p className="text-xl text-gray-600">支持TTS（文本到语音）和STT（语音到文本）技术</p>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-10 relative">
              <img
                src="/hero/rss_demo.png"
                alt="无障碍功能演示"
                className="w-[866px] h-[650px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-24 pt-[120px] pb-[144px] bg-gradient-to-b from-[#6cc4e9] to-[#aae5f9]">
        <div className=" flex flex-col items-center justify-center">
          <div className="text-center mb-[55px]">
            <h2 className="text-3xl font-normal mb-4">我们致力于为罕见病患者打造便捷的信息平台</h2>
            <p className="text-xl text-gray-600">订阅您关注的罕见病，随时自动更新最新信息</p>
          </div>
          <Button
            size="lg"
            className="bg-brand-500 hover:bg-brand-600 w-[200px] h-16 text-white px-6 py-3 rounded-md"
          >
            <p className="text-xl leading-[1.5]">试试看</p>
            <ArrowRightIcon className="!w-6 !h-6" />
          </Button>
        </div>
      </section>
    </>
  )
}
