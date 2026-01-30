"use client";
import { Button, Form, Input } from "@/components/index";
import { Recipe, useRecipesStore } from "@/store/recipesStore";
import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { Select } from "@/components/index";
import { Difficulty } from "@/types/types";
import { Plus, Trash2 } from "lucide-react";

export const CreateRecipeForm = () => {
  const form = useForm();
  const { createRecipe } = useRecipesStore();
  const [newRecipe, setNewRecipe] = useState<Recipe>({} as Recipe);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createRecipe(newRecipe);
  };
  const handleSetNewRecipe = (e: ChangeEvent<HTMLInputElement>) => {
    setNewRecipe((state) => ({ ...state, [e.target.id]: e.target.value }));
  };
  const handleSetDifficulty = (value: Difficulty) => {
    setNewRecipe((state) => ({ ...state, difficulty: value }));
  };
  const handleArrayChange = (
    type: "ingredients" | "instructions",
    index: number,
    value: string,
  ) => {
    setNewRecipe((prev) => {
      const updatedArray = [...(prev[type] || [])];
      updatedArray[index] = value;
      return { ...prev, [type]: updatedArray };
    });
  };

  const addArrayItem = (type: "ingredients" | "instructions") => {
    setNewRecipe((prev) => ({
      ...prev,
      [type]: [...(prev[type] || []), ""],
    }));
  };
  const removeArrayItem = (
    type: "ingredients" | "instructions",
    index: number,
  ) => {
    setNewRecipe((prev) => ({
      ...prev,
      [type]: (prev[type] || []).filter((_, i) => i !== index),
    }));
  };
  return (
    <Form.Form {...form}>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-4 p-3"
      >
        <Form.FormField
          control={form.control}
          name="name"
          render={() => (
            <Form.FormItem>
              <Form.FormLabel htmlFor="name">Recipe Title *</Form.FormLabel>
              <Input
                id="name"
                placeholder="Recipe title"
                type="text"
                required
                className="w-full"
                onChange={handleSetNewRecipe}
              />
            </Form.FormItem>
          )}
        />

        <div className="flex w-full flex-row justify-between gap-10 flex-wrap">
          <Form.FormField
            control={form.control}
            name="name"
            render={() => (
              <Form.FormItem className="w-[45%]">
                <Form.FormLabel htmlFor="difficulty">
                  Difficulty *
                </Form.FormLabel>
                <Select.SelectDifficult onValueChange={handleSetDifficulty} />
              </Form.FormItem>
            )}
          />
          <Form.FormField
            control={form.control}
            name="name"
            render={() => (
              <Form.FormItem className="w-[45%]">
                <Form.FormLabel htmlFor="cookTimeMinutes">
                  Cooking Time *
                </Form.FormLabel>
                <Input
                  id="cookTimeMinutes"
                  placeholder="Minutes"
                  type="number"
                  min={0}
                  required
                  className="w-full"
                  onChange={handleSetNewRecipe}
                />
              </Form.FormItem>
            )}
          />
        </div>
        <div className="flex w-full flex-row justify-between gap-10 flex-wrap">
          <Form.FormField
            control={form.control}
            name="name"
            render={() => (
              <Form.FormItem className="w-[45%]">
                <Form.FormLabel htmlFor="servings">Servings *</Form.FormLabel>
                <Input
                  id="servings"
                  placeholder="Servings"
                  type="number"
                  min={0}
                  required
                  className="w-full"
                  onChange={handleSetNewRecipe}
                />
              </Form.FormItem>
            )}
          />
          <Form.FormField
            control={form.control}
            name="name"
            render={() => (
              <Form.FormItem className="w-[45%]">
                <Form.FormLabel htmlFor="caloriesPerServing">
                  Calories (per serving) *
                </Form.FormLabel>
                <Input
                  id="caloriesPerServing"
                  placeholder="Calories"
                  min={0}
                  type="number"
                  required
                  className="w-full"
                  onChange={handleSetNewRecipe}
                />
              </Form.FormItem>
            )}
          />
        </div>
        <Form.FormField
          control={form.control}
          name="name"
          render={() => (
            <Form.FormItem>
              <Form.FormLabel htmlFor="image">Image URL</Form.FormLabel>
              <Input
                id="image"
                placeholder="Recipe photo"
                type="text"
                onChange={handleSetNewRecipe}
                className="w-full"
              />
            </Form.FormItem>
          )}
        />
        <div>
          <div className="flex items-center justify-between mb-2">
            <Form.FormLabel className="text-base font-semibold">
              Ingredients
            </Form.FormLabel>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-orange/70 hover:text-orange"
              onClick={() => addArrayItem("ingredients")}
            >
              <Plus className="w-4 h-4 mr-1" /> Add
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            {newRecipe.ingredients?.map((item, index) => (
              <Form.FormField
                key={index}
                name={`ingredients.${index}.value`}
                render={() => (
                  <Form.FormItem>
                    <div className="flex flex-row items-center gap-2">
                      <Form.FormControl>
                        <Input
                          placeholder="e.g. 1 cup Arborio rice"
                          value={item}
                          onChange={(e) =>
                            handleArrayChange(
                              "ingredients",
                              index,
                              e.target.value,
                            )
                          }
                        />
                      </Form.FormControl>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeArrayItem("ingredients", index)}
                        disabled={newRecipe.ingredients.length === 1}
                      >
                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-difficult-hard" />
                      </Button>
                    </div>
                  </Form.FormItem>
                )}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <Form.FormLabel className="text-base font-semibold">
              Instructions
            </Form.FormLabel>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-orange/70 hover:text-orange"
              onClick={() => addArrayItem("instructions")}
            >
              <Plus className="w-4 h-4 mr-1" /> Add
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            {newRecipe.instructions?.map((item, index) => (
              <Form.FormField
                key={index}
                control={form.control}
                name={`instructions.${index}.value`}
                render={() => (
                  <Form.FormItem>
                    <div className="flex flex-row items-start gap-2">
                      <div className="flex items-center justify-center w-10 h-10 shrink-0 mt-1 rounded-full bg-orange/10 text-orange font-bold text-sm">
                        {index + 1}
                      </div>
                      <Form.FormControl>
                        <Input
                          placeholder="Describe this step..."
                          value={item}
                          onChange={(e) =>
                            handleArrayChange(
                              "instructions",
                              index,
                              e.target.value,
                            )
                          }
                        />
                      </Form.FormControl>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="mt-1"
                        onClick={() => removeArrayItem("instructions", index)}
                        disabled={newRecipe.instructions.length === 1}
                      >
                        <Trash2 className="w-4 h-4 text-secondary-text hover:text-difficult-hard" />
                      </Button>
                    </div>
                  </Form.FormItem>
                )}
              />
            ))}
          </div>
        </div>
        <Button type="submit" className="bg-orange text-white">
          Create Recipe
        </Button>
      </form>
    </Form.Form>
  );
};
