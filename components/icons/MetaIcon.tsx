import { cn } from '@/lib/utils'

interface MetaIconProps {
  className?: string
}

export default function MetaIcon({ className }: MetaIconProps) {
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
        d="M22.3337 21.7497H25.2503L26.417 17.083H22.3337V14.7497C22.3337 13.5487 22.3337 12.4163 24.667 12.4163H26.417V8.49646C26.037 8.446 24.6005 8.33301 23.0837 8.33301C19.9168 8.33301 17.667 10.266 17.667 13.816V17.083H14.167V21.7497H17.667V31.6663H22.3337V21.7497Z"
        fill="currentColor"
      />
    </svg>
  )
}
