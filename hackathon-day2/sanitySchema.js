export default {
    name: 'carRental',
    title: 'Car Rental',
    type: 'document',
    fields: [
      {
        name: 'carName',
        title: 'Car Name',
        type: 'string',
        description: 'Name or identifier for the car (e.g., Toyota Camry).',
        validation: (Rule) => Rule.required().error('Car name is required.'),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'carName',
          maxLength: 100,
        },
        description: 'URL-friendly identifier for the car.',
        validation: (Rule) =>
          Rule.required().error('Slug is required for car identification.'),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Detailed description of the car, including features and specifications.',
        validation: (Rule) => Rule.max(500).error('Description cannot exceed 500 characters.'),
      },
      {
        name: 'rentalPricePerDay',
        title: 'Rental Price Per Day',
        type: 'number',
        description: 'Daily rental price for the car in USD.',
        validation: (Rule) =>
          Rule.required()
            .positive()
            .error('Rental price must be a positive value.'),
      },
      {
        name: 'discount',
        title: 'Discount Percentage',
        type: 'number',
        description: 'Discount percentage (if applicable).',
        validation: (Rule) =>
          Rule.min(0)
            .max(100)
            .error('Discount must be between 0 and 100.'),
      },
      {
        name: 'availability',
        title: 'Availability',
        type: 'boolean',
        description: 'Indicates if the car is available for rent.',
      },
      {
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Key features of the car (e.g., GPS, Air Conditioning, Automatic Transmission).',
      },
      {
        name: 'numberOfSeats',
        title: 'Number of Seats',
        type: 'number',
        description: 'Number of seats in the car.',
        validation: (Rule) =>
          Rule.required()
            .positive()
            .integer()
            .error('Number of seats must be a positive integer.'),
      },
      {
        name: 'fuelType',
        title: 'Fuel Type',
        type: 'string',
        options: {
          list: [
            { title: 'Petrol', value: 'petrol' },
            { title: 'Diesel', value: 'diesel' },
            { title: 'Electric', value: 'electric' },
            { title: 'Hybrid', value: 'hybrid' },
          ],
        },
        description: 'Fuel type of the car.',
      },
      {
        name: 'transmission',
        title: 'Transmission',
        type: 'string',
        options: {
          list: [
            { title: 'Manual', value: 'manual' },
            { title: 'Automatic', value: 'automatic' },
          ],
        },
        description: 'Type of transmission (manual or automatic).',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
        description: 'Images of the car.',
        validation: (Rule) =>
          Rule.required().error('At least one image of the car is required.'),
      },
      {
        name: 'pickupLocation',
        title: 'Pickup Location',
        type: 'string',
        description: 'Default pickup location for the car rental.',
      },
      {
        name: 'rentalPolicies',
        title: 'Rental Policies',
        type: 'text',
        description: 'Rental policies and terms for the car.',
        validation: (Rule) => Rule.max(1000).error('Rental policies cannot exceed 1000 characters.'),
      },
    ],
  };
  