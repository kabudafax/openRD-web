import { cn } from '@/lib/utils'
import InstagramIcon from '../icons/InstagramIcon'
import MetaIcon from '../icons/MetaIcon'
import XIcon from '../icons/XIcon'

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  className?: string
}

function SocialLink({ href, icon, label, className }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(' transition-colors duration-200', className)}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  )
}

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
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="mailto:contact@openrd.com"
                  className="text-gray-600 text-lg hover:text-gray-900"
                >
                  contact@openrd.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              关注我们
            </h3>
            <div className="mt-3 flex space-x-6">
              {/* 社交媒体图标 */}
              <div className="flex space-x-8">
                <SocialLink
                  href="https://facebook.com"
                  icon={<MetaIcon className="w-8 h-8 " />}
                  label="Follow us on Facebook"
                  className="hover:text-[#6a6868]"
                />
                <SocialLink
                  href="https://twitter.com"
                  icon={<XIcon className="w-8 h-8 " />}
                  label="Follow us on X (Twitter)"
                  className="hover:text-[#6a6868]"
                />
                <SocialLink
                  href="https://instagram.com"
                  icon={<InstagramIcon className="w-8 h-8" />}
                  label="Follow us on Instagram"
                  className="hover:text-[#6a6868]"
                />
              </div>
            </div>
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
