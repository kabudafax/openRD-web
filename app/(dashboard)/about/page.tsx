import React, { FC } from 'react'
import Image from 'next/image'

interface HomeProps {}

const AboutPage: FC<HomeProps> = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-20">
        <div className="relative max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="mt-[140px] ml-[150px] text-3xl md:text-4xl font-normal !leading-[1.5] mb-4">
              我们是一群希望用技术造福
              <br />
              罕见病群体的梦之队
            </h1>
          </div>

          {/* 装饰图片区域 */}
          <div className="">
            <div className="absolute right-0 top-[-100px] grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-48 h-48">
                  <Image
                    src="/hero/about_1.png"
                    alt="Decoration"
                    width={192}
                    height={192}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
