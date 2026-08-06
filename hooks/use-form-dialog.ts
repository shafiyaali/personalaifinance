import { useState } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import {  toast } from "@/components/ui/toast";
export function useCrudDialog<T extends FieldValues>(form: UseFormReturn<T>) {
    const [formError, setFormError] = useState<string | undefined>();

    function close(message: string) {
        form.reset();
        setFormError(undefined)
        toast.add({
                    type: "success",
                    title: message
                })
    }

    function openDialog() {
        form.reset();
        setFormError(undefined);
    }

    return { formError, setFormError, openDialog, close}
}

