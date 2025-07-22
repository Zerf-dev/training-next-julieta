// export default function NotFound() {
//   return (
//     <div className="text-center">
//       <h2 className="text-2xl font-bold mb-4">Not Found</h2>
//       <p>Could not find requested resource</p>
//     </div>
//   );
// }

// 'use client'

// import { Icon } from 'lucide-react'
// import { coatHanger } from '@lucide/lab'
// import Link from 'next/link'
// import { useEffect } from 'react'
// import { useRouter } from 'next/navigation'

// export default function NotFound() {
//   const router = useRouter()

//   useEffect(() => {
//     const t = setTimeout(() => router.push('/'), 5000)
//     return () => clearTimeout(t)
//   }, [router])

//   return (
//     <div className="flex flex-col items-center justify-center px-4 text-center">
//       <h2 className="text-3xl font-bold mb-16">PAGE NOT FOUND</h2>

//       <Icon
//         iconNode={coatHanger}
//         className="w-24 h-24 text-black mb-6"
//       />

//       <p className="mb-2 text-black">
//         We can&apos;t find the page you&apos;re looking for, it will return to the
//       </p>

//       <Link
//         href="/"
//         className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition"
//       >
//         ← HOME PAGE 
//       </Link>
//     </div>
//   )
// }

// app/not-found.tsx
'use client'
import { Icon } from 'lucide-react'
import { coatHanger } from '@lucide/lab'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="
        flex flex-col items-center justify-start 
        pt-12 min-h-[calc(100vh-64px)]
        px-4 text-center w-full
      "
    >
      <h2 className="text-2xl font-bold mb-8">PAGE NOT FOUND</h2>

      <Icon
        iconNode={coatHanger}
        className="w-16 h-16 text-black mb-6"
      />

      <p className="mb-6 text-sm text-gray-600">
      We can&apos;t find the page you&apos;re looking for, it will return to the
      </p>

      <Link
        href="/"
        className="
          block w-full max-w-xs 
          bg-[#F93C00] text-white 
          py-3 rounded-full 
          hover:bg-[#d83800] transition
        "
      >
        ← HOME PAGE
      </Link>
    </div>
  )
}
