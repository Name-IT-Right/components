# @name-it-right/components

UI Components for Name IT Right

## Install
`npm i @name-it-right/components`

## Available components - React

### `ValidatedFormField`
Aims to work exactly like to Cloudscape's [FormField](https://cloudscape.design/components/form-field/), but additionally supports a `nameItRight` property. 

Usage:

```tsx
import { Input } from "@cloudscape-design/components"
import { BaseChangeDetail } from "@cloudscape-design/components/input/interfaces"
import { NonCancelableEventHandler } from "@cloudscape-design/components/internal/events"
import { ValidatedFormField } from "@name-it-right/components"
import { validationsSafe } from "@name-it-right/db" // DB lib is under construction
import { useState } from "react"

const Component = () => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const handleOnSubmit = () => setSubmitClicked(true);

  const [inputValue, setInputValue] = useState('');
  const handleOnChange: NonCancelableEventHandler<BaseChangeDetail> = e => setInputValue(e.detail.value);

  return (  
    <ValidatedFormField
      label="Bucket name"
      constraintText="Bucket name must be globally unique"
      nameItRight={{
        enabled: submitClicked,
        input: inputValue,
        rules: validations.S3.Bucket.BucketName,
      }}
    >
      <Input
        value={inputValue}
        onChange={handleOnChange}
        placeholder="myawsbucket"
      />
    </ValidatedFormField>
  )
}
```


