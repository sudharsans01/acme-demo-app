export interface Product {
  id: number
  name: string
  description: string
  price: string
  icon: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Cloud Platform Starter',
    description: 'Everything you need to launch your first cloud workload. Managed infrastructure, auto-scaling, and 24/7 monitoring included.',
    price: '$49/mo',
    icon: '☁️',
  },
  {
    id: 2,
    name: 'Kubernetes Pro',
    description: 'Production-grade Kubernetes clusters with automated upgrades, node autoscaling, and integrated observability.',
    price: '$199/mo',
    icon: '⚙️',
  },
  {
    id: 3,
    name: 'DevOps Automation',
    description: 'CI/CD pipelines, automated testing, and deployment workflows that integrate with your existing Git repositories.',
    price: '$99/mo',
    icon: '🔄',
  },
  {
    id: 4,
    name: 'Container Platform',
    description: 'Build, store, and deploy container images at scale. Private registry, vulnerability scanning, and policy enforcement.',
    price: '$79/mo',
    icon: '📦',
  },
  {
    id: 5,
    name: 'Observability Suite',
    description: 'Unified metrics, logs, and traces across your entire stack. Real-time dashboards and intelligent alerting.',
    price: '$149/mo',
    icon: '📊',
  },
  {
    id: 6,
    name: 'Developer Toolkit',
    description: 'CLI tools, SDKs, and IDE integrations to accelerate development. Local dev environments that mirror production.',
    price: '$29/mo',
    icon: '🛠️',
  },
]
