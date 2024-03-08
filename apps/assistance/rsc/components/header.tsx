import Link from 'next/link';

import {
  IconAI,
  IconGitHub,
  IconSeparator,
  IconSparkles,
  IconVercel,
} from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full px-4 border-b h-14 shrink-0 bg-background backdrop-blur-xl">
      <span className="inline-flex items-center home-links whitespace-nowrap">
        {/* <a href="https://vercel.com" rel="noopener" target="_blank">
          <IconVercel className="w-5 h-5 sm:h-6 sm:w-6" />
        </a>
        <IconSeparator className="w-6 h-6 text-muted-foreground/20" />
        <Link href="/">
          <span className="text-lg font-bold">
            <IconSparkles className="inline mr-0 w-4 sm:w-5 mb-0.5" />
            AI
          </span>
        </Link> */}
      </span>
      <div className="flex items-center justify-end space-x-2">
        <Button variant="outline" asChild>
          <a
            target="_blank"
            href="https://github.com/patrickneiler/ranthology"
            rel="noopener noreferrer"
          >
            <IconGitHub />
            <span className="hidden ml-2 md:flex">GitHub</span>
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://www.notion.so/Project-Assistym-dbde03652ad64f8a968f02a820013f28?pvs=4"
            target="_blank"
          >
            <IconAI className="mr-2" />
            <span className="hidden sm:block">About</span>
            <span className="sm:hidden">About</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
