export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/OpenRD.svg" alt="OpenRD" className="h-8 w-auto" />
            <p className="mt-4 text-gray-600">致力于为罕见病患者提供AI辅助诊疗服务</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              联系我们
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="mailto:contact@openrd.com" className="text-gray-600 hover:text-gray-900">
                  Email: contact@openrd.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              关注我们
            </h3>
            <div className="mt-4 flex space-x-6">{/* 社交媒体图标 */}</div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} OpenRD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
