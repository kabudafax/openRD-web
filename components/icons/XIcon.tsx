import { cn } from '@/lib/utils'

interface XIconProps {
  className?: string
}

export default function XIcon({ className }: XIconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-10 h-10', className)}
    >
      <path
        d="M26.6356 9.57324L20.8061 16.237L15.7659 9.57324H8.46582L17.1882 20.9788L8.9214 30.4274H12.4613L18.8416 23.137L24.4177 30.4274H31.5369L22.4445 18.4069L30.1734 9.57324H26.6356ZM25.3941 28.3099L12.5971 11.5795H14.7007L27.3543 28.3099H25.3941Z"
        fill="currentColor"
      />
    </svg>
  )
}
