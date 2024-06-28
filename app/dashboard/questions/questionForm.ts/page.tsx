/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Y35ks5EGAb5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function QuestionForm() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const question = formData.get("question");
    const difficultyLevel = formData.get("difficulty");
    const questionCount = formData.get("total");

    fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
        difficultyLevel: difficultyLevel,
        questionCount: questionCount,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Generate Question</CardTitle>
        {/* <CardDescription>
            Enter the topi
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleFormSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="question">Question</Label>
            <Textarea
              id="question"
              name="question"
              placeholder="Enter the Topic of the question you want to generate"
              className="min-h-[100px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulty</Label>
              <Select name="difficulty">
                <SelectTrigger id="difficulty">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="total">Total Questions</Label>
              <Input
                id="total"
                name="total"
                type="number"
                placeholder="Enter total questions"
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Submit Feedback
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
