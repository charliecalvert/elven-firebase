# Overview

```regex
^(const|var)(\s.*\s*)=(\s*)(require)(\(*.)([^'\)]*')(\));
import$2from $3'$6;
```
