import { CheckIcon } from '@heroicons/react/20/solid';

// Simple classNames utility function
const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Pricing tiers data
const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    priceMonthly: '$9',
    description: 'Perfect for getting started with our platform.',
    features: [
      'Up to 5 projects',
      'Basic analytics',
      'Email support',
      'Mobile app access',
    ],
    href: '#',
    featured: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    priceMonthly: '$29',
    description: 'Best for growing teams and businesses.',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      'Team collaboration',
      'API access',
      'Custom integrations',
    ],
    href: '#',
    featured: true,
  },
];

export const Pricing = () => {
  return (
    <>
      <div className="relative isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-yellow-400">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
            Start creating your own knowledge today.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Choose a plan, build your own knowledge, and share it with the world.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                'liquid-glass',
                tier.featured
                  ? 'rounded-xl'
                  : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                'p-8 ring-1 ring-white/10 sm:p-10'
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? 'text-yellow-400' : 'text-yellow-400',
                  'text-base/7 font-semibold'
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? 'text-white' : 'text-white',
                    'text-5xl font-semibold tracking-tight'
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span
                  className={classNames(
                    tier.featured ? 'text-gray-400' : 'text-gray-400',
                    'text-base'
                  )}
                >
                  /month
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? 'text-gray-300' : 'text-gray-300',
                  'mt-6 text-base/7'
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? 'text-gray-300' : 'text-gray-300',
                  'mt-8 space-y-3 text-sm/6 sm:mt-10'
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? 'text-yellow-400' : 'text-yellow-400',
                        'h-6 w-5 flex-none'
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300 focus-visible:outline-yellow-400'
                    : 'bg-white/10 text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-white/75',
                  'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
                )}
              >
                Get started today
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
