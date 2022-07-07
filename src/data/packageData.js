import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

export default {
  individual: [
    {
      id: 1,
      name: "Basic Background",
      description: "Get Routine Background",
      buttonText: "Request This Service",
      priceWithUnit: "$50",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Online Background Info",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Address History",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Work History",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Criminal History ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      header: "Customizable",
      name: "Background Plus",
      description: "Additional Custom Research",
      priceWithUnit: "$150",
      buttonText: "Request This Service",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Research Specific Topic",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Address History",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Work History",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Criminal History ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: "Customizable",
      headerIcon: <IoIosCheckmarkCircle />,
      name: "Personal Investigation",
      description: "Research A Person Or Issue",
      priceWithUnit: "$300",
      buttonText: "Request This Service",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Unbiased third party investigation",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Supplemental Evidence",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Written findings report",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Locate an individual",
          isAvailable: true,
        },
      ],
    },
  ],
  business: [
    {
      id: 1,
      name: "Basic Background Bulk",
      description: "Background Check Multiple",
      buttonText: "Request This Service",
      priceWithUnit: "$100",
      anotherOption: "Or $300 Monthly",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Online Background Info",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Address History",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Work History",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Criminal History ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      header: "Customizable",
      name: "Background Plus",
      description: "Additional Custom Research",
      priceWithUnit: "$150",
      buttonText: "Request This Service",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Research Specific Topic",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Address History",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Work History",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Criminal History ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: "Customizable",
      headerIcon: <IoIosCheckmarkCircle />,
      name: "Personal Investigation",
      description: "Research A Person Or Issue",
      priceWithUnit: "$400",
      buttonText: "Request This Service",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Unbiased third party investigation",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Supplemental Evidence",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Written findings report",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Locate and interview witnesses",
          isAvailable: true,
        },
      ],
    },
  ],
};
