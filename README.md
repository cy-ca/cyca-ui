# CypressCadenzza Web UI

# Setup Instruction

Install `PNPM`, and configure `Node`.

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
source ~/.bashrc
pnpm env use --global 22
```

Install dependencies

```bash
pnpm install
```

# Usage Instructions

Build the necessary packages

```bash
pnpm chakra build --watch
```

Launch the dashboard

```bash
pnpm app dev
```
