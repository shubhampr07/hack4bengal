"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import QuestionForm from "./questionForm.ts/page";

export default function Component() {
  const [isQuestionGenerated, setIsQuestionGenerated] = useState(false);
  return (
    <>
      {isQuestionGenerated ? (
        <div className="grid grid-cols-[1fr,300px] gap-8 p-8">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <div className="mb-6 text-2xl font-bold">
                What is the capital of France?
              </div>
              <div className="grid gap-4">
                <Button variant="outline" className="justify-start">
                  <span className="flex-1 text-left">Paris</span>
                  <CheckIcon className="h-5 w-5 text-primary" />
                </Button>
                <Button variant="outline" className="justify-start">
                  <span className="flex-1 text-left">London</span>
                </Button>
                <Button variant="outline" className="justify-start">
                  <span className="flex-1 text-left">Berlin</span>
                </Button>
                <Button variant="outline" className="justify-start">
                  <span className="flex-1 text-left">Madrid</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center gap-4">
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <div className="mb-2 text-sm font-medium text-muted-foreground">
                Time Remaining
              </div>
              <div className="text-4xl font-bold">2:15</div>
              <Progress value={75} className="mt-2" />
            </div>
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <div className="mb-2 text-sm font-medium text-muted-foreground">
                Question 3 of 10
              </div>
              <div className="text-4xl font-bold">3</div>
              <Progress value={30} className="mt-2" />
            </div>
          </div>
        </div>
      ) : (
        <QuestionForm />
      )}
    </>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
