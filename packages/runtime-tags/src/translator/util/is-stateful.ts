import {
  type Binding,
  BindingType,
  type ReferencedBindings,
} from "./references";

export function isStatefulReferences(referencedBindings: ReferencedBindings) {
  if (referencedBindings) {
    if (Array.isArray(referencedBindings)) {
      for (const ref of referencedBindings) {
        if (isStatefulBinding(ref)) {
          return true;
        }
      }
    } else {
      return isStatefulBinding(referencedBindings);
    }
  }

  return false;
}

export function isStatefulBinding(binding: Binding): boolean {
  switch (binding.type) {
    case BindingType.let:
    case BindingType.input:
      return true;
    default:
      return binding.upstreamAlias
        ? isStatefulBinding(binding.upstreamAlias)
        : !binding.upstreamExpression ||
            isStatefulReferences(binding.upstreamExpression.referencedBindings);
  }
}
