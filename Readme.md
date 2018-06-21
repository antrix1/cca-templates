# Opinionated React Component Generators

## Installation

- `npm install -g create-component-app`
- Copy the contents of this repo to your project directory
- Optionally edit your copied templates to include parts of your app layout

## Usage

1.  ES6 React Component

- `create-component-app --template ps_class`

2.  Functional React Component

- `create-component-app --template ps_func`

3.  Higher Order Component

- `create-component-app --template ps_hoc`

4.  Redux Container

- `create-component-app --template ps_container --path src/containers`

5.  Page / Route Component

- `create-component-app --template ps_page --path src/pages`

## Easy Keybinds

- On Unix, edit your `~/.bash_profile` and create aliases to make access to these generators more efficient

```
alias ps_class="create-component-app --template ps_class"
alias ps_hoc="create-component-app --template ps_hoc"
alias ps_func="create-component-app --template ps_func"
alias ps_container="create-component-app --template ps_container --path src/containers"
alias ps_page="create-component-app --template ps_page --path src/pages"
```
