import {
  ChatBubbleBottomCenterTextIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: '智能问答',
    description: '基于最新医学研究的AI助手，为您提供准确的罕见病信息',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: '信息可靠',
    description: '所有信息均经过专业团队审核，确保准确性',
    icon: ShieldCheckIcon,
  },
  {
    name: '患者社区',
    description: '连接相似病症的患者，分享经验与互助',
    icon: UserGroupIcon,
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-normal text-gray-900">
            我们致力于为罕见病患者打造便捷的信息平台
          </h2>
          <p className="mt-4 text-xl text-gray-600">让每一位患者都能获得专业的指导与支持</p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-center">
                  <feature.icon className="h-12 w-12 text-brand-500" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-center">{feature.name}</h3>
                <p className="mt-2 text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
