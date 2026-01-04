type TimelineCardFooterProps = {
  message: string;
};

export default async function TimelineCardFooter({ message }: TimelineCardFooterProps) {
  return (
    <div className="border-t pt-2">
      <div className="font-thin text-sm italic">{message}</div>
    </div>
  );
}
